"use client";

import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  links: string[];
}

function ImageGallery({ images,links }: { images: string[],links: string[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-48 bg-gray-200">
      <Link href={links[currentImageIndex]} target="_blank">
        <Image
          src={images[currentImageIndex]}
          alt={`Project image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover cursor-pointer"
          width={400}
          height={200}
        />
      </Link>
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition-opacity"
        aria-label="Previous image"
      >
        <CaretLeft color="#000000" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition-opacity"
        aria-label="Next image"
      >
        <CaretRight color="#000000" />
      </button>
    </div>
  );
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      id: 1,
      title: "CRM Softwares",
      description:
        "Streamline customer interactions and boost sales with powerful CRM tools that manage leads, track communication, and enhance relationships.",
      images: ["/crm/img1.png", "/crm/img2.png"],
      links: [
        "https://admin.stunningnyc.com/",
        "https://admin.stunningnyc.com/",
      ],
    },
    {
      id: 2,
      title: "E-commerce Platforms",
      description:
        "Create seamless online shopping experiences with feature-rich platforms designed to scale, optimize conversions, and simplify management.",
      images: [
        "/e-commerce/img3.png",
        "/e-commerce/img1.png",
        "/e-commerce/img2.png",
        "/e-commerce/img4.png",
      ],
      links: [
        "https://westgarthwines.com/",
        "https://stunningnyc.com/",
        "https://westgarthwines.com/",
        "https://stunningnyc.com/",
      ],
    },
    {
      id: 3,
      title: "Landing Pages",
      description:
        "Convert visitors into leads with high-converting, visually engaging landing pages optimized for marketing campaigns.",
      images: [
        "/landing-pages/img1.png",
        "/landing-pages/img11.png",
        "/landing-pages/img2.png",
        "/landing-pages/img3.png",
        "/landing-pages/img4.png",
        "/landing-pages/img5.png",
        "/landing-pages/img6.png",
        "/landing-pages/img7.png",
        "/landing-pages/img8.png",
        "/landing-pages/img9.png",
        "/landing-pages/img10.png",
      ],
      links: [
        "https://bigshorts-ten.vercel.app/",
        "https://thekathakaar.com/",
        "https://kdr-frontend.vercel.app/",
        "https://kdr-frontend.vercel.app",
        "https://kdr-frontend.vercel.app",
        "https://web-scooby.vercel.app/",
        "https://web-scooby.vercel.app/",
        "https://web-scooby.vercel.app/",
        "https://kdr-frontend.vercel.app",
        "https://bigshorts-ten.vercel.app/",
        "https://formify-pro-frontend.vercel.app/",
      ],
    },
    {
      id: 5,
      title: "SaaS Platforms",
      description:
        "Offer cloud-based software solutions that deliver continuous updates, scalability, and flexibility for businesses of all sizes.",
      images: [
        "/saas/img3.png",
        "/saas/img1.png",
        "/saas/img2.png",
        "/saas/img4.png",
        "/saas/img5.png",
        "/saas/img6.png",
      ],
      links: [
        "https://formify-pro-frontend.vercel.app/",
        "https://formify-pro-frontend.vercel.app/",
        "https://formify-pro-frontend.vercel.app/",
        "https://formify-pro-frontend.vercel.app/",
        "https://admin.stunningnyc.com/",
        "https://admin.stunningnyc.com/",
      ],
    },
    {
      id: 6,
      title: "Blogs & Affiliate Websites",
      description:
        "Share valuable insights, grow your audience, and monetize traffic with content-rich blogs and affiliate marketing strategies.",
      images: [
        "/blogs/img1.png",
        "/blogs/img2.png",
        "/blogs/img3.png",
        "/blogs/img4.png",
        "/blogs/img5.png",
        "/blogs/img6.png",
      ],
      links: [
        "https://coffee-blog-vandan15.vercel.app/",
        "https://coffee-blog-vandan15.vercel.app/",
        "https://coffee-blog-vandan15.vercel.app/",
        "https://coffee-blog-vandan15.vercel.app/",
        "https://winecap.com/",
        "https://winecap.com/",
      ],
    },
    {
      id: 7,
      title: "SEO & Paid Ads",
      description:
        "Drive organic growth and maximize ROI through targeted SEO strategies and precision-focused paid advertising campaigns.",
      images: [
        "/seo/img3.png",
        "/seo/img1.png",
        "/seo/img2.png",
        "/seo/img4.png",
      ],
      links: [
        "https://web-scooby.vercel.app/",
        "https://thekathakaar.com/",
        "https://kdr-frontend.vercel.app/",
        "https://coffee-blog-vandan15.vercel.app/",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg p-4 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Welcome to Our Project Showcase
              </h2>
              <p className="text-gray-600">
                {`We are a dedicated team of developers specializing in delivering innovative and efficient solutions. Below is a selection of our recent projects, each reflecting a unique challenge and showcasing our expertise across various areas of software development.`}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <ImageGallery images={project.images} links={project.links}/>
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900 truncate">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
