"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  PawPrint,
  Camera,
  MapPin,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Upload,
  X,
  Loader2,
  AlertCircle,
  LayoutList,
} from "lucide-react";

const steps = ["Category", "Details", "Photos", "Location", "Preview"];

const animalTypes = [
  { name: "Dogs", emoji: "🐕", subtypes: ["Puppy", "Adult", "Mixed"] },
  { name: "Cats", emoji: "🐱", subtypes: ["Kitten", "Adult", "Mixed"] },
  { name: "Cows", emoji: "🐄", subtypes: ["Dairy", "Beef", "Mixed"] },
  { name: "Buffalo", emoji: "🐃", subtypes: ["Dairy", "Beef", "Mixed"] },
  { name: "Goats", emoji: "🐐", subtypes: ["Dairy", "Meat", "Breeding"] },
  { name: "Sheep", emoji: "🐑", subtypes: ["Dairy", "Meat", "Wool"] },
  { name: "Birds", emoji: "🐦", subtypes: ["Parrot", "Pigeon", "Other"] },
  { name: "Rabbits", emoji: "🐰", subtypes: ["Pet", "Breeding"] },
  { name: "Fish", emoji: "🐟", subtypes: ["Freshwater", "Saltwater"] },
  { name: "Others", emoji: "🐾", subtypes: ["Horse", "Donkey", "Other"] },
];

const provinces = [
  "Punjab",
  "Sindh",
  "Khyber Pakhtunkhwa",
  "Balochistan",
  "Islamabad Capital Territory",
];

const initialFormData = {
  animalType: "",
  subtype: "",
  breed: "",
  name: "",
  age: "",
  weight: "",
  gender: "",
  price: "",
  description: "",
  milkYield: "",
  pregnancy: "",
  photos: [],
  state: "",
  city: "",
  sellerName: "",
  phone: "",
};

export default function PostAdPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPublished, setIsPublished] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [publishError, setPublishError] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  const fileInputRefs = useRef([]);

  const updateForm = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.animalType !== "";
      case 1:
        return (
          formData.breed &&
          formData.name &&
          formData.age &&
          formData.weight &&
          formData.gender &&
          formData.price
        );
      case 2:
        return true;
      case 3:
        return formData.state && formData.city && formData.sellerName && formData.phone;
      default:
        return true;
    }
  };

  const handlePhotoSelect = (index, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const newPhotos = [...formData.photos];
      newPhotos[index] = { url: ev.target.result, name: file.name };
      setFormData((prev) => ({ ...prev, photos: newPhotos }));
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = (index) => {
    const newPhotos = [...formData.photos];
    newPhotos[index] = null;
    setFormData((prev) => ({ ...prev, photos: newPhotos }));
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index].value = "";
    }
  };

  const handlePublish = async () => {
    setPublishing(true);
    setPublishError("");

    try {
      const body = {
        name: formData.name,
        breed: formData.breed,
        category: formData.animalType,
        subtype: formData.subtype,
        age: formData.age,
        weight: formData.weight,
        gender: formData.gender,
        price: formData.price,
        description: formData.description,
        milkYield: formData.milkYield,
        image: formData.photos[0]?.url || "",
        images: formData.photos.filter(Boolean).map((p) => p.url),
        location: formData.city ? `${formData.city}, ${formData.state}` : formData.state,
        city: formData.city,
        province: formData.state,
        sellerName: formData.sellerName,
        phone: formData.phone,
      };

      const res = await fetch("/api/listings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to publish ad");
      }

      setIsPublished(true);
    } catch (err) {
      setPublishError(err.message);
    } finally {
      setPublishing(false);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setCurrentStep(0);
    setIsPublished(false);
    setPublishError("");
  };

  if (isPublished) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-surface to-white">
        <div className="bg-gradient-to-r from-primary to-primary-light py-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl font-bold text-white font-[family-name:var(--font-display)]">
              Post Your Ad — Free!
            </h1>
            <p className="mt-2 text-white/80">
              List your animal and reach thousands of potential buyers across Pakistan.
            </p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
          <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-sm">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 font-[family-name:var(--font-display)] mb-3">
              Ad Published Successfully!
            </h2>
            <p className="text-gray-500 max-w-md mx-auto mb-2">
              Your <strong>{formData.animalType}</strong> listing is now live and visible to
              thousands of potential buyers across Pakistan.
            </p>
            <p className="text-sm text-gray-400 mb-8">
              We&apos;ll notify you when someone is interested.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={handleReset} className="btn btn-primary">
                <PawPrint className="w-4 h-4" />
                Post Another Ad
              </button>
              <Link href="/my-listings" className="btn btn-outline">
                <LayoutList className="w-4 h-4" />
                My Listings
              </Link>
              <Link href="/listings" className="btn btn-ghost">
                Browse Listings
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-light py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-white font-[family-name:var(--font-display)]">
            Post Your Ad — Free!
          </h1>
          <p className="mt-2 text-white/80">
            List your animal and reach thousands of potential buyers across Pakistan.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {/* Progress steps */}
        <div className="flex items-center justify-between mb-10">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    i < currentStep
                      ? "bg-primary text-white"
                      : i === currentStep
                        ? "bg-primary text-white ring-4 ring-primary/20"
                        : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {i < currentStep ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    i + 1
                  )}
                </div>
                <span
                  className={`text-xs mt-2 font-medium hidden sm:block ${
                    i <= currentStep ? "text-primary" : "text-gray-400"
                  }`}
                >
                  {step}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`w-12 sm:w-20 h-0.5 mx-2 ${
                    i < currentStep ? "bg-primary" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step content */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
          {/* Step 0: Category */}
          {currentStep === 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 font-[family-name:var(--font-display)] mb-6">
                Select Animal Type
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {animalTypes.map((type) => (
                  <button
                    key={type.name}
                    onClick={() => updateForm("animalType", type.name)}
                    className={`flex flex-col items-center gap-2 p-5 rounded-xl border-2 transition-all ${
                      formData.animalType === type.name
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-gray-100 hover:border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-3xl">{type.emoji}</span>
                    <span className="font-medium text-sm text-gray-700">
                      {type.name}
                    </span>
                  </button>
                ))}
              </div>
              {formData.animalType && (
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subtype
                  </label>
                  <div className="flex gap-2">
                    {animalTypes
                      .find((t) => t.name === formData.animalType)
                      ?.subtypes.map((sub) => (
                        <button
                          key={sub}
                          onClick={() => updateForm("subtype", sub)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            formData.subtype === sub
                              ? "bg-primary text-white"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          {sub}
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 1: Details */}
          {currentStep === 1 && (
            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-800 font-[family-name:var(--font-display)] mb-6">
                Animal Details
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Animal Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateForm("name", e.target.value)}
                    placeholder="e.g., Sheru, Heera"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Breed *
                  </label>
                  <input
                    type="text"
                    value={formData.breed}
                    onChange={(e) => updateForm("breed", e.target.value)}
                    placeholder="e.g., German Shepherd, Sahiwal"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Age *
                  </label>
                  <input
                    type="text"
                    value={formData.age}
                    onChange={(e) => updateForm("age", e.target.value)}
                    placeholder="e.g., 2 years, 6 months"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Weight *
                  </label>
                  <input
                    type="text"
                    value={formData.weight}
                    onChange={(e) => updateForm("weight", e.target.value)}
                    placeholder="e.g., 50 kg"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Gender *
                  </label>
                  <div className="flex gap-2">
                    {["Male", "Female"].map((g) => (
                      <button
                        key={g}
                        onClick={() => updateForm("gender", g)}
                        className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                          formData.gender === g
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Price (Rs) *
                  </label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => updateForm("price", e.target.value)}
                    placeholder="e.g., 25000"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              {(formData.animalType === "Cows" ||
                formData.animalType === "Buffalo") && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Milk Yield (Liters/day)
                  </label>
                  <input
                    type="text"
                    value={formData.milkYield}
                    onChange={(e) => updateForm("milkYield", e.target.value)}
                    placeholder="e.g., 15L/day"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Description
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => updateForm("description", e.target.value)}
                  placeholder="Tell buyers about your animal's health, vaccination status, temperament..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                />
              </div>
            </div>
          )}

          {/* Step 2: Photos */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 font-[family-name:var(--font-display)] mb-6">
                Add Photos
              </h2>
              <p className="text-gray-500 mb-6">
                Animals with photos get 5x more views. Add clear photos from
                multiple angles.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[0, 1, 2, 3, 4, 5].map((i) => {
                  const photo = formData.photos[i];
                  return (
                    <div key={i} className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        ref={(el) => (fileInputRefs.current[i] = el)}
                        onChange={(e) => handlePhotoSelect(i, e)}
                      />
                      {photo ? (
                        <div className="aspect-square rounded-xl overflow-hidden border-2 border-primary/30 group">
                          <Image
                            src={photo.url}
                            alt={photo.name}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                            unoptimized
                          />
                          <button
                            onClick={() => removePhoto(i)}
                            className="absolute top-2 right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                          >
                            <X className="w-4 h-4" />
                          </button>
                          {i === 0 && (
                            <span className="absolute bottom-2 left-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                              MAIN
                            </span>
                          )}
                        </div>
                      ) : (
                        <button
                          onClick={() => fileInputRefs.current[i]?.click()}
                          className="aspect-square w-full border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-400 hover:border-primary hover:text-primary cursor-pointer transition-colors"
                        >
                          <Camera className="w-8 h-8 mb-2" />
                          <span className="text-xs font-medium">
                            {i === 0 ? "Main Photo" : `Photo ${i + 1}`}
                          </span>
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 bg-accent/10 rounded-xl p-4 flex items-start gap-3">
                <span className="text-2xl">📸</span>
                <div>
                  <p className="font-medium text-accent-dark text-sm">
                    Photo Tips for Better Listings
                  </p>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Take photos in natural daylight</li>
                    <li>• Show the full body from multiple angles</li>
                    <li>• Include close-ups of face and features</li>
                    <li>• Make sure photos are clear and not blurry</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Location */}
          {currentStep === 3 && (
            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-800 font-[family-name:var(--font-display)] mb-6">
                Location & Contact
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Province *
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => updateForm("state", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    <option value="">Select Province</option>
                    {provinces.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    City *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => updateForm("city", e.target.value)}
                    placeholder="e.g., Lahore, Karachi"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.sellerName}
                    onChange={(e) => updateForm("sellerName", e.target.value)}
                    placeholder="Full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateForm("phone", e.target.value)}
                    placeholder="+92 3XX XXXXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Preview */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 font-[family-name:var(--font-display)] mb-6">
                Preview Your Ad
              </h2>
              <div className="bg-gradient-to-br from-surface to-white border border-gray-100 rounded-xl p-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-48 h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex flex-col items-center justify-center text-primary/40 overflow-hidden">
                    {formData.photos[0] ? (
                      <Image
                        src={formData.photos[0].url}
                        alt="Preview"
                        width={192}
                        height={192}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    ) : (
                      <>
                        <Camera className="w-10 h-10 mb-2" />
                        <span className="text-xs font-medium">Upload Photo</span>
                      </>
                    )}
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-gray-800">
                      {formData.name || "Animal Name"}
                    </h3>
                    <p className="text-gray-500">
                      {formData.breed || "Breed"} • {formData.animalType}
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <span>Age: {formData.age || "N/A"}</span>
                      <span>•</span>
                      <span>Weight: {formData.weight || "N/A"}</span>
                      <span>•</span>
                      <span>Gender: {formData.gender || "N/A"}</span>
                    </div>
                    {formData.milkYield && (
                      <p className="text-primary font-medium text-sm">
                        Milk Yield: {formData.milkYield}
                      </p>
                    )}
                    <p className="text-2xl font-bold text-primary">
                      Rs{formData.price ? parseInt(formData.price).toLocaleString("en-PK") : "0"}
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {formData.city && formData.state
                        ? `${formData.city}, ${formData.state}`
                        : "Location not set"}
                    </p>
                  </div>
                </div>
                {formData.description && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600">
                      {formData.description}
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-green-800 text-sm">
                    Your ad is ready to publish!
                  </p>
                  <p className="text-green-700 text-sm mt-1">
                    Once published, your listing will be visible to thousands of
                    buyers across Pakistan.
                  </p>
                </div>
              </div>

              {publishError && (
                <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-700">{publishError}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
            disabled={currentStep === 0}
            className="btn btn-outline btn-sm disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          {currentStep < steps.length - 1 ? (
            <button
              onClick={() => setCurrentStep((s) => Math.min(4, s + 1))}
              disabled={!canProceed()}
              className="btn btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handlePublish}
              disabled={publishing}
              className="btn btn-accent btn-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {publishing ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <PawPrint className="w-5 h-5" />
              )}
              {publishing ? "Publishing..." : "Publish Ad — Free!"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
