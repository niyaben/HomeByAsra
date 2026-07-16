export const projects = [
  {
    slug: "miramichi",
    name: "Miramichi Mixed-Use Community",
    location: "Miramichi, New Brunswick",
    type: "Mixed-Use — Residential & Commercial",
    status: "In Planning",
    tagline: "Redefining urban living in New Brunswick.",
    summary:
      "A master-planned neighbourhood bridging modern commercial utility with comfortable, family-oriented residential design.",
    quickFacts: [
      { label: "Location", value: "Miramichi, NB" },
      { label: "Community Type", value: "Mixed-Use" },
      { label: "Footprint", value: "1,400m² commercial" },
      { label: "Residential", value: "15 row-house units" },
    ],
    highlights: [
      {
        title: "Master Plan & Site Structure",
        detail:
          "A structured site plan optimizes building placement, traffic flow, and pedestrian paths, anchored by a central outdoor sitting area.",
      },
      {
        title: "Commercial Frontage",
        detail:
          "Ground-level retail, a community clinic, and neighbourhood cafes sit behind expansive glass facades, with condos above.",
      },
      {
        title: "Family Row Houses",
        detail:
          "Two-storey units combine brick masonry, natural timber columns, private entrances, and attached garages.",
      },
      {
        title: "Interiors",
        detail:
          "Waterfall stone islands, light-oak cabinetry, double-height glazing, and slatted-wood feature walls throughout.",
      },
    ],
    communityImpact:
      "A multi-million dollar development that strengthens the regional economy, introduces local services, and delivers a walkable, sustainable long-term asset to New Brunswick's urban landscape.",
    contactLabel: "Office of Commercial Leasing",
  },
  {
    slug: "millet",
    name: "Millet Family Apartment",
    location: "Millet, Alberta",
    type: "Residential — Multi-Family Apartment",
    status: "In Development",
    tagline: "Next-generation living, engineered for resilience.",
    summary:
      "A steel-frame apartment community pairing durable construction with inclusive, accessible design and shared amenities.",
    quickFacts: [
      { label: "Location", value: "Millet, AB" },
      { label: "Structure", value: "Structural steel frame" },
      { label: "Glazing", value: "Triple-layer, high-efficiency" },
      { label: "Access", value: "Fully accessible design" },
    ],
    highlights: [
      {
        title: "Resilient Engineering",
        detail:
          "Structural steel frame networks with high-performance, fire-resistant cladding maximize building lifespan.",
      },
      {
        title: "Accessibility",
        detail:
          "Extra-wide, wheelchair-ready corridors, non-slip washroom tiling, and barrier-free elevator access on every level.",
      },
      {
        title: "Interiors",
        detail:
          "Open-concept living rooms, integrated gourmet kitchens, and flat-panel custom cabinetry throughout.",
      },
      {
        title: "Community Amenities",
        detail:
          "A landscaped rooftop sky-terrace and multipurpose social room encourage everyday tenant connection.",
      },
    ],
    communityImpact:
      "Millet Family Apartment brings resilient, inclusive housing to a growing Alberta community, with shared spaces designed to build genuine neighbourly connection.",
    contactLabel: "Residential Leasing",
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
