"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "./FadeIn";

const blobs = [
  {
    outer: "42% 58% 55% 45% / 48% 38% 62% 52%",
    inner: "55% 45% 60% 40% / 45% 55% 45% 55%",
  },
  {
    outer: "58% 42% 48% 52% / 40% 60% 40% 60%",
    inner: "45% 55% 42% 58% / 52% 48% 58% 42%",
  },
  {
    outer: "48% 52% 62% 38% / 55% 45% 55% 45%",
    inner: "60% 40% 50% 50% / 42% 58% 48% 52%",
  },
  {
    outer: "52% 48% 45% 55% / 45% 55% 62% 38%",
    inner: "40% 60% 55% 45% / 58% 42% 42% 58%",
  },
];

const serviceGroups = [
  {
    category: "Garden Maintenance",
    services: [
      { title: "Lawn Care", description: "We provide comprehensive lawn care services, including mowing, edging, scarification, aeration, overseeding, fertilising, and weed treatment to keep your lawn healthy, green, and well-maintained.", image: "/service-card-thumbnail/lawnCare.png" },
      { title: "Hedge Trimming and Shaping", description: "Our hedge cutting services ensure your hedges remain neat, well-shaped, and healthy, enhancing both appearance and structure.", image: "/service-card-thumbnail/hedgeTrimming.png" },
      { title: "Garden Clearance and Renovation", description: "We restore overgrown or neglected gardens by removing unwanted vegetation, clearing waste, and preparing the space for future use or redesign.", image: "/service-card-thumbnail/gardenClearance.png" },
      { title: "Seasonal Maintenance", description: "We offer tailored seasonal services, including spring preparation, summer upkeep, autumn leaf clearance, and winter tidy-ups.", image: "/service-card-thumbnail/seasonalMaintainence.png" },
      { title: "Weeding and Border Maintenance", description: "We remove weeds from beds, borders, and pathways, applying mulch where needed to help suppress regrowth and retain moisture.", image: "/service-card-thumbnail/weeding.png" },
      { title: "Pruning and Shaping", description: "We carefully prune shrubs, roses, perennials, and small trees to encourage healthy growth, improved structure, and seasonal flowering.", image: "/service-card-thumbnail/pruning.png" },
      { title: "General Tidying and Cleaning", description: "From leaf clearance to sweeping and debris removal, we keep your garden looking clean, organised, and well-presented.", image: "/service-card-thumbnail/generalTidying.png" },
    ],
  },
  {
    category: "Planting & Design",
    services: [
      { title: "Planting", description: "We supply and install a variety of plants, including flowers, shrubs, and trees, offering guidance on suitable choices for your garden and local conditions.", image: "/service-card-thumbnail/planting.png" },
      { title: "Garden Design and Soft Landscaping", description: "We assist with planning layouts, creating borders, laying turf or gravel, and installing features such as raised beds to enhance your outdoor space.", image: "/service-card-thumbnail/softLandscaping.png" },
      { title: "Vegetable and Fruit Growing", description: "We help set up and maintain productive garden areas, including vegetable patches and fruit trees, with advice on planting and care.", image: "/service-card-thumbnail/vegetable.png" },
    ],
  },
  {
    category: "Hard Landscaping and Installation",
    services: [
      { title: "Patio and Path Work", description: "We clean and restore patios, paths, and driveways using professional jet washing, improving both appearance and safety.", image: "/service-card-thumbnail/patioWork.png" },
      { title: "Fencing and Gates", description: "We offer installation, repair, and treatment of fencing and gates to improve security, privacy, and durability.", image: "/service-card-thumbnail/fence.png" },
      { title: "Turfing and Levelling", description: "We lay new lawns and level uneven ground to create a smooth, attractive finish.", image: "/service-card-thumbnail/turfing.png" },
      { title: "Pond and Water Feature Maintenance", description: "We provide basic cleaning, planting, and maintenance for ponds and water features to keep them looking their best.", image: "/service-card-thumbnail/pond.png" },
    ],
  },
  {
    category: "Specialist and Additional Services",
    services: [
      { title: "Tree Surgery and Care", description: "We carry out light tree work such as pruning and crown lifting to maintain safety and appearance.", image: "/service-card-thumbnail/treeCare.png" },
      { title: "Disease Control", description: "We identify plant health issues and apply appropriate treatments, including environmentally friendly options where possible.", image: "/service-card-thumbnail/plantHealth.png" },
      { title: "Fertilising and Feeding", description: "We apply the correct nutrients to lawns and plants to support healthy growth and long-term vitality.", image: "/service-card-thumbnail/fertilising.png" },
      { title: "Waste Removal and Green Waste Disposal", description: "We responsibly collect and dispose of all garden waste, leaving your property clean and tidy.", image: "/service-card-thumbnail/greenWasteRemoval.png" },
      { title: "Seasonal Extras", description: "We offer additional services such as hanging baskets, seasonal planting, and maintenance for residential or commercial outdoor spaces.", image: "/service-card-thumbnail/seasonalExtras.png" },
      {
        title: "Exterior Cleaning Services",
        description: "Keep your property looking clean with our professional exterior cleaning. We remove dirt, algae, and buildup from windows, walls, and outdoor surfaces to deliver a streak-free finish.",
        image: "/service-card-thumbnail/exteriorCleaning.png",
      },
      { title: "Garden Consulting and Advice", description: "We provide expert guidance on plant selection, garden improvements, and maintenance planning to help you get the most from your outdoor space.", image: "/service-card-thumbnail/softLandscaping.png" },
      { title: "Container and Small-Space Gardening", description: "We maintain and enhance balconies, courtyards, and container gardens, ensuring even smaller spaces are attractive and well cared for.", image: "/service-card-thumbnail/container.png" },
    ],
  },
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  let globalIndex = 0;

  return (
    <section id="services" className="relative w-full bg-[#f3f4ec] py-24 px-6 overflow-hidden">
      {/* Decorative leaf */}
      <svg className="absolute bottom-0 right-0 w-48 opacity-20 pointer-events-none" viewBox="0 0 200 200" fill="none">
        <path d="M180,180 C140,160 60,140 20,20 C80,60 160,80 180,180Z" fill="#7cb518" />
        <path d="M100,180 L100,20" stroke="#7cb518" strokeWidth="2" strokeDasharray="6 4" />
      </svg>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <FadeIn className="text-center mb-14">
          <h2 className="font-bold uppercase mb-4" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
            <span style={{ color: "#0d2e1a" }}>LAPS Bespoke and Reliable </span>
            <span style={{ color: "#3a8c52" }}>Services</span>
          </h2>
          <div className="text-gray-500 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed flex flex-col gap-4">
            <p>
              We offer a wide range of garden and outdoor maintenance services designed to keep your space looking its best right across the year. From routine care like mowing and hedge trimming to more involved projects like garden clearances, planting and landscaping, <Link href="/about" className="font-bold text-emerald-700 hover:text-emerald-900 transition-colors underline underline-offset-2">our expert team</Link> is here to
              provide you with a tailored and high-quality service.
            </p>
            <p>Take a look at some of the services we specialise in below and understand how we can transform, refine and maintain your green space, no matter how big or small.</p>
          </div>
        </FadeIn>

        {/* Service groups */}
        <div className="flex flex-col gap-16">
          {serviceGroups.map((group) => (
            <div
              key={group.category}
              id={group.category
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "")}
            >
              {/* Category heading */}
              <FadeIn className="mb-8">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-emerald-200" />
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest whitespace-nowrap">{group.category}</span>
                  <div className="h-px flex-1 bg-emerald-200" />
                </div>
              </FadeIn>

              {/* Cards */}
              <div className="flex flex-wrap justify-center gap-5">
                {group.services.map((service) => {
                  const i = globalIndex++;
                  const key = `${group.category}-${service.title}`;
                  const active = hovered === key;
                  const blob = blobs[i % blobs.length];
                  return (
                    <FadeIn key={key} delay={(i % 4) * 0.1} className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-16px)]">
                      <div
                        id={service.title
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")
                          .replace(/(^-|-$)/g, "")}
                        onMouseEnter={() => setHovered(key)}
                        onMouseLeave={() => setHovered(null)}
                        className="rounded-3xl overflow-hidden flex flex-col cursor-default transition-colors duration-300 h-full"
                        style={{ background: active ? "#c5e84a" : "#ffffff" }}
                      >
                        {/* Blob top area */}
                        <div className="relative h-52 shrink-0">
                          {/* Outer outline blob */}
                          <div
                            className="absolute transition-colors duration-300"
                            style={{
                              width: "78%",
                              height: "88%",
                              top: "-12%",
                              right: "-12%",
                              borderRadius: blob.outer,
                              border: `2px solid ${active ? "#9bc22a" : "#c2dfc0"}`,
                              background: "transparent",
                            }}
                          />
                          {/* Inner filled blob — clipped image */}
                          <div
                            className="absolute overflow-hidden"
                            style={{
                              width: "65%",
                              height: "74%",
                              top: "-6%",
                              right: "-4%",
                              borderRadius: blob.inner,
                            }}
                          >
                            {service.image ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src={service.image} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            ) : (
                              <div style={{ width: "100%", height: "100%", background: "#d4e8ce" }} />
                            )}
                          </div>
                        </div>

                        {/* Text */}
                        <div className="flex flex-col gap-2 px-6 pb-10 flex-1">
                          <Link href="/contact" className="text-lg font-bold underline underline-offset-4 decoration-2 transition-colors duration-300 hover:opacity-80" style={{ color: active ? "#14532d" : "#111827" }}>
                            {service.title}
                          </Link>
                          <p className="text-sm leading-relaxed transition-colors duration-300" style={{ color: active ? "#166534cc" : "#6b7280" }}>
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <FadeIn delay={0.4} className="mt-16 flex flex-col items-center text-center gap-6 bg-white rounded-3xl p-6 sm:p-10 border border-gray-100">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Got a Project in Mind?</span>
          <h3 className="font-bold uppercase" style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", lineHeight: 1.05 }}>
            <span style={{ color: "#0d2e1a" }}>Speak to our </span>
            <span style={{ color: "#3a8c52" }}>team today!</span>
          </h3>
          <div className="text-gray-500 text-base max-w-3xl flex flex-col gap-4">
            <p>If you&apos;re planning improvements to your garden or simply need a reliable team to maintain your space, then the Little Aston Park team is here to help.</p>
            <p>
              We always take the time to understand your needs and requirements and provide practical, tailored solutions to achieve the best results for your space. Get in touch with our team today to discuss your project. We&apos;re always happy to offer advice and help you take the next steps
              towards a garden you can enjoy all year round.
            </p>
          </div>
          <a href="/contact" className="px-8 py-3.5 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-900/20">
            Get in Touch
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
