"use client";

import { useState } from "react";
import {
  galleryCategories,
  type BookCategory,
  type GalleryPhoto,
} from "./galleryData";
import GalleryHero from "./GalleryHero";
import BookshelfStage from "./BookshelfStage";
import BookPreviewModal from "./BookPreviewModal";
import OpenBookSpread from "./OpenBookSpread";
import PhotoLightboxModal from "./PhotoLightboxModal";

type ViewMode = "shelf" | "preview" | "open";

interface ActiveLightboxState {
  photo: GalleryPhoto;
  eventTitle: string;
  index: number;
  total: number;
  allPhotos: GalleryPhoto[];
}

export default function GalleryContainer() {
  const [viewMode, setViewMode] = useState<ViewMode>("shelf");
  const [selectedCategory, setSelectedCategory] = useState<BookCategory | null>(
    null
  );
  const [currentEventIndex, setCurrentEventIndex] = useState<number>(0);
  const [activeLightbox, setActiveLightbox] =
    useState<ActiveLightboxState | null>(null);

  // User selects a book from the shelf -> show preview modal
  const handleSelectCategory = (category: BookCategory) => {
    setSelectedCategory(category);
    setViewMode("preview");
  };

  // User clicks "Open Book →" in the preview modal
  const handleOpenBook = (category: BookCategory) => {
    setSelectedCategory(category);
    // Open to the first page spread by default (index 0)
    setCurrentEventIndex(0);
    setViewMode("open");
  };

  // Switch category directly inside the open album
  const handleSwitchCategoryInSpread = (category: BookCategory) => {
    setSelectedCategory(category);
    setCurrentEventIndex(0);
  };

  // Return to gallery shelf
  const handleReturnToGallery = () => {
    setViewMode("shelf");
    setSelectedCategory(null);
    setActiveLightbox(null);
  };

  // Open photo in lightbox
  const handlePhotoClick = (
    photo: GalleryPhoto,
    index: number,
    eventTitle: string
  ) => {
    const currentEvent = currentCategory.events[currentEventIndex];
    const allPhotos = currentEvent?.photos || [photo];

    setActiveLightbox({
      photo,
      eventTitle,
      index,
      total: allPhotos.length,
      allPhotos,
    });
  };

  // Lightbox previous
  const handleLightboxPrev = () => {
    if (!activeLightbox) return;
    const nextIndex =
      (activeLightbox.index - 1 + activeLightbox.total) %
      activeLightbox.total;
    const nextPhoto = activeLightbox.allPhotos[nextIndex];
    if (nextPhoto) {
      setActiveLightbox({
        ...activeLightbox,
        index: nextIndex,
        photo: nextPhoto,
      });
    }
  };

  // Lightbox next
  const handleLightboxNext = () => {
    if (!activeLightbox) return;
    const nextIndex = (activeLightbox.index + 1) % activeLightbox.total;
    const nextPhoto = activeLightbox.allPhotos[nextIndex];
    if (nextPhoto) {
      setActiveLightbox({
        ...activeLightbox,
        index: nextIndex,
        photo: nextPhoto,
      });
    }
  };

  const currentCategory = selectedCategory || galleryCategories[0];

  return (
    <div className="relative min-h-[calc(100vh-5rem)] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
      {/* Bookshelf State */}
      {viewMode !== "open" && (
        <div className="flex flex-col gap-6 sm:gap-10 animate-fadeIn">
          <GalleryHero totalBooks={galleryCategories.length} />

          <BookshelfStage
            categories={galleryCategories}
            selectedCategoryId={selectedCategory?.id || null}
            onSelectCategory={handleSelectCategory}
          />
        </div>
      )}

      {/* Book Preview Modal */}
      {viewMode === "preview" && selectedCategory && (
        <BookPreviewModal
          category={selectedCategory}
          onOpenBook={handleOpenBook}
          onDismiss={handleReturnToGallery}
        />
      )}

      {/* Open Book View */}
      {viewMode === "open" && currentCategory && (
        <div className="animate-fadeIn">
          <OpenBookSpread
            category={currentCategory}
            allCategories={galleryCategories}
            currentEventIndex={currentEventIndex}
            onEventChange={setCurrentEventIndex}
            onSelectCategory={handleSwitchCategoryInSpread}
            onReturnToGallery={handleReturnToGallery}
            onPhotoClick={handlePhotoClick}
          />
        </div>
      )}

      {/* High-Resolution Photo Lightbox */}
      {activeLightbox && (
        <PhotoLightboxModal
          photo={activeLightbox.photo}
          eventTitle={activeLightbox.eventTitle}
          currentIndex={activeLightbox.index}
          totalPhotos={activeLightbox.total}
          onPrev={handleLightboxPrev}
          onNext={handleLightboxNext}
          onClose={() => setActiveLightbox(null)}
        />
      )}
    </div>
  );
}
