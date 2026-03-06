'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Prevent image download on right-click
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  // Prevent image drag
  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    return false;
  };

  // Gallery images - slider images repurposed as gallery
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      title: 'PMO Headquarters',
      category: 'working tour',
      image: '/images/gallery/tour1.jpg',
      description: 'State-of-the-art PMO headquarters showcasing modern governance infrastructure',
    },
    {
      id: 2,
      title: 'Governance Workshop 2024',
      category: 'working tour',
      image: '/images/gallery/tour2.jpg',
      description: 'Corporate governance training session with parastatals officials and stakeholders',
    },
    {
      id: 3,
      title: 'Performance Audit Team',
      category: 'working tour',
      image: '/images/gallery/tour3.jpg',
      description: 'Our dedicated performance audit team conducting evaluations',
    },
    {
      id: 4,
      title: 'Strategic Leadership Meeting',
      category: 'working tour',
      image: '/images/gallery/tour4.jpg',
      description: 'Executive meeting with state enterprise heads discussing performance metrics',
    },
    {
      id: 5,
      title: 'Stakeholder Engagement Forum',
      category: 'working tour',
      image: '/images/gallery/tour5.jpg',
      description: 'PMO engaging with parastatals stakeholders and community partners',
    },
    {
      id: 6,
      title: 'PMO Headquarters',
      category: 'retreat',
      image: '/images/gallery/retreat1.jpg',
      description: 'State-of-the-art PMO headquarters showcasing modern governance infrastructure',
    },
    {
      id: 7,
      title: 'Governance Workshop 2024',
      category: 'retreat',
      image: '/images/gallery/retreat2.jpg',
      description: 'Corporate governance training session with parastatals officials and stakeholders',
    },
    {
      id: 8,
      title: 'Performance Audit Team',
      category: 'retreat',
      image: '/images/gallery/retreat3.jpg',
      description: 'Our dedicated performance audit team conducting evaluations',
    },
    {
      id: 9,
      title: 'Strategic Leadership Meeting',
      category: 'retreat',
      image: '/images/gallery/retreat4.jpg',
      description: 'Executive meeting with state enterprise heads discussing performance metrics',
    },
    {
      id: 10,
      title: 'Stakeholder Engagement Forum',
      category: 'retreat',
      image: '/images/gallery/retreat5.jpg',
      description: 'PMO engaging with parastatals stakeholders and community partners',
    },
    {
      id: 11,
      title: 'PMO Headquarters',
      category: 'paraface',
      image: '/images/gallery/paraface1.jpg',
      description: 'State-of-the-art PMO headquarters showcasing modern governance infrastructure',
    },
    {
      id: 12,
      title: 'Governance Workshop 2024',
      category: 'paraface',
      image: '/images/gallery/paraface2.jpg',
      description: 'Corporate governance training session with parastatals officials and stakeholders',
    },
    {
      id: 13,
      title: 'Performance Audit Team',
      category: 'paraface',
      image: '/images/gallery/paraface3.jpg',
      description: 'Our dedicated performance audit team conducting evaluations',
    },
    {
      id: 14,
      title: 'Strategic Leadership Meeting',
      category: 'paraface',
      image: '/images/gallery/paraface4.jpg',
      description: 'Executive meeting with state enterprise heads discussing performance metrics',
    },
    {
      id: 15,
      title: 'Stakeholder Engagement Forum',
      category: 'paraface',
      image: '/images/gallery/paraface5.jpg',
      description: 'PMO engaging with parastatals stakeholders and community partners',
    },
    {
      id: 16,
      title: 'PMO Headquarters',
      category: 'im alive',
      image: '/images/gallery/alive1.jpg',
      description: 'State-of-the-art PMO headquarters showcasing modern governance infrastructure',
    },
    {
      id: 17,
      title: 'Governance Workshop 2024',
      category: 'im alive',
      image: '/images/gallery/alive2.jpg',
      description: 'Corporate governance training session with parastatals officials and stakeholders',
    },
    {
      id: 18,
      title: 'Performance Audit Team',
      category: 'im alive',
      image: '/images/gallery/alive3.jpg',
      description: 'Our dedicated performance audit team conducting evaluations',
    },
    {
      id: 19,
      title: 'Strategic Leadership Meeting',
      category: 'im alive',
      image: '/images/gallery/alive4.jpg',
      description: 'Executive meeting with state enterprise heads discussing performance metrics',
    },
    {
      id: 20,
      title: 'Stakeholder Engagement Forum',
      category: 'im alive',
      image: '/images/gallery/alive5.jpg',
      description: 'PMO engaging with parastatals stakeholders and community partners',
    },
  ];

  const categories = ['all', 'working tour', 'retreat', 'paraface', 'im alive'];

  const filteredImages =
    selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  // Handle image click - set both selected image and current index
  const handleImageClick = (image: GalleryImage) => {
    const index = filteredImages.findIndex((img) => img.id === image.id);
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  // Navigate to previous image
  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      const newIndex = currentImageIndex - 1;
      setCurrentImageIndex(newIndex);
      setSelectedImage(filteredImages[newIndex]);
    }
  };

  // Navigate to next image
  const handleNextImage = () => {
    if (currentImageIndex < filteredImages.length - 1) {
      const newIndex = currentImageIndex + 1;
      setCurrentImageIndex(newIndex);
      setSelectedImage(filteredImages[newIndex]);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowLeft') handlePreviousImage();
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex, filteredImages]);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Gallery"
        subtitle="Visual Journey of PMO's Impact and Activities"
        backgroundColor="bg-gradient-to-r from-red-700 via-blue-700 to-red-800"
        height="md"
      />

      {/* Gallery Section */}
      <Section bgColor="white">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all capitalize ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category === 'all' ? 'All Images' : category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 gallery-protected">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className="cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow select-none"
              onClick={() => handleImageClick(img)}
              onContextMenu={handleContextMenu}
            >
              <div className="relative h-64 overflow-hidden select-none">
                <Image
                  src={img.image}
                  alt={`${img.title} - ${img.description}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300 pointer-events-none"
                  onContextMenu={handleContextMenu}
                  onDragStart={handleDragStart}
                  draggable={false}
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No images found in this category
            </p>
          </div>
        )}
      </Section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 gallery-protected"
          onClick={() => setSelectedImage(null)}
          onContextMenu={handleContextMenu}
        >
          <div
            className="relative w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
            onClick={(e) => e.stopPropagation()}
            onContextMenu={handleContextMenu}
          >
            {/* Previous Button */}
            <button
              onClick={handlePreviousImage}
              disabled={currentImageIndex === 0}
              className={`shrink-0 p-3 rounded-full transition-all ${
                currentImageIndex === 0
                  ? 'text-gray-600 cursor-not-allowed'
                  : 'text-white hover:bg-white/20 hover:scale-110'
              }`}
              aria-label="Previous image"
            >
              <FaChevronLeft size={36} />
            </button>

            {/* Main Container */}
            <div className="relative w-full max-w-3xl flex-shrink-0">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-4xl font-bold z-10 transition-colors"
              >
                ✕
              </button>

              {/* Image */}
              <div className="relative w-full bg-black/30 rounded-lg overflow-hidden select-none">
                <Image
                  src={selectedImage.image}
                  alt={`Full view of ${selectedImage.title} - ${selectedImage.description}`}
                  width={1200}
                  height={800}
                  className="object-contain w-full h-auto max-h-[500px] md:max-h-[600px]"
                  onContextMenu={handleContextMenu}
                  onDragStart={handleDragStart}
                  draggable={false}
                  quality={85}
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Image Details */}
              <div className="bg-gray-900 p-6 text-white rounded-b-lg">
                <h2 className="text-2xl font-bold mb-3">{selectedImage.title}</h2>
                <p className="text-gray-300 mb-2 capitalize">
                  Category: <span className="text-red-400">{selectedImage.category}</span>
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">{selectedImage.description}</p>

                {/* Image Counter */}
                <div className="text-sm text-gray-400 mt-4 pt-4 border-t border-gray-700">
                  Image {currentImageIndex + 1} of {filteredImages.length}
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNextImage}
              disabled={currentImageIndex === filteredImages.length - 1}
              className={`shrink-0 p-3 rounded-full transition-all ${
                currentImageIndex === filteredImages.length - 1
                  ? 'text-gray-600 cursor-not-allowed'
                  : 'text-white hover:bg-white/20 hover:scale-110'
              }`}
              aria-label="Next image"
            >
              <FaChevronRight size={36} />
            </button>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <Section bgColor="gray">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-red-600 mb-2">
              {galleryImages.length}+
            </h3>
            <p className="text-gray-600">Images in Collection</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-red-600 mb-2">
              {categories.length - 1}
            </h3>
            <p className="text-gray-600">Categories</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-red-600 mb-2">Monthly</h3>
            <p className="text-gray-600">Updates</p>
          </div>
        </div>
      </Section>
    </>
  );
}
