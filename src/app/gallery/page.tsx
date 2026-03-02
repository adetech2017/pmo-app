'use client';

import { useState } from 'react';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Section, { SectionTitle, SectionSubtitle } from '@/components/Section';

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
      category: 'office',
      image: '/images/1.jpg',
      description: 'State-of-the-art PMO headquarters showcasing modern governance infrastructure',
    },
    {
      id: 2,
      title: 'Governance Workshop 2024',
      category: 'event',
      image: '/images/2.jpg',
      description: 'Corporate governance training session with parastatals officials and stakeholders',
    },
    {
      id: 3,
      title: 'Performance Audit Team',
      category: 'team',
      image: '/images/3.jpg',
      description: 'Our dedicated performance audit team conducting evaluations',
    },
    {
      id: 4,
      title: 'Strategic Leadership Meeting',
      category: 'meeting',
      image: '/images/4.jpg',
      description: 'Executive meeting with state enterprise heads discussing performance metrics',
    },
    {
      id: 5,
      title: 'Stakeholder Engagement Forum',
      category: 'event',
      image: '/images/5.jpg',
      description: 'PMO engaging with parastatals stakeholders and community partners',
    },
  ];

  const categories = ['all', 'office', 'event', 'team', 'meeting'];

  const filteredImages =
    selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

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
        <SectionTitle center>Image Gallery</SectionTitle>
        <SectionSubtitle center>
          Explore our collection of photos from events, offices, and activities
        </SectionSubtitle>

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
              onClick={() => setSelectedImage(img)}
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
                  quality={80}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    View
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {img.title}
                </h3>
                <p className="text-sm text-gray-600">{img.description}</p>
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
            className="relative max-w-4xl max-h-screen"
            onClick={(e) => e.stopPropagation()}
            onContextMenu={handleContextMenu}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-3xl font-bold"
            >
              ✕
            </button>

            {/* Image */}
            <div className="relative w-full h-auto max-h-96 md:max-h-screen select-none">
              <Image
                src={selectedImage.image}
                alt={`Full view of ${selectedImage.title} - ${selectedImage.description}`}
                width={1200}
                height={800}
                className="object-contain w-full h-auto max-h-screen pointer-events-none"
                onContextMenu={handleContextMenu}
                onDragStart={handleDragStart}
                draggable={false}
                quality={90}
                sizes="100vw"
                priority
              />
            </div>

            {/* Image Details */}
            <div className="bg-gray-900 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
              <p className="text-gray-300 mb-2 capitalize">
                Category: <span className="text-red-400">{selectedImage.category}</span>
              </p>
              <p className="text-gray-400">{selectedImage.description}</p>
            </div>
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
