"use client";

import Footer from "../component/Footer";
import { useState } from "react";
import {
  coreMembers,
  members,
  seniorMembers,
  type CoreMember,
} from "../../data/team";
import ChromaGrid from "../../components/ui/ChromaGrid";

type TabKey = "core" | "senior" | "members";

function classNames(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function PillNav({
  active,
  onChange,
}: {
  active: TabKey;
  onChange: (key: TabKey) => void;
}) {
  const tabs: { key: TabKey; label: string }[] = [
    { key: "core", label: "Core Members" },
    { key: "senior", label: "Senior Members" },
    { key: "members", label: "Members" },
  ];
  return (
    <div className="flex items-center justify-center">
      <div className="inline-flex rounded-full bg-zinc-900 p-1 border border-zinc-800">
        {tabs.map((tab) => {
          const isActive = tab.key === active;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onChange(tab.key)}
              className={classNames(
                "relative px-4 py-2 text-sm md:text-base rounded-full transition-colors",
                isActive
                  ? "bg-white text-black shadow"
                  : "text-zinc-300 hover:text-white",
              )}
              aria-pressed={isActive}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Transform core members data for ChromaGrid
function transformCoreMembers(coreMembers: CoreMember[]) {
  const colors = [
    {
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
    },
    {
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
    },
    {
      borderColor: "#F59E0B",
      gradient: "linear-gradient(135deg, #F59E0B, #000)",
    },
    {
      borderColor: "#EF4444",
      gradient: "linear-gradient(160deg, #EF4444, #000)",
    },
    {
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(150deg, #8B5CF6, #000)",
    },
    {
      borderColor: "#EC4899",
      gradient: "linear-gradient(170deg, #EC4899, #000)",
    },
    {
      borderColor: "#06B6D4",
      gradient: "linear-gradient(140deg, #06B6D4, #000)",
    },
    {
      borderColor: "#84CC16",
      gradient: "linear-gradient(165deg, #84CC16, #000)",
    },
  ];

  return coreMembers.map((member, index) => {
    const colorScheme = colors[index % colors.length];
    return {
      image: member.imageUrl || "/path/to/avatar.jpg",
      title: member.name,
      subtitle: member.role,
      handle: `@${member.name.toLowerCase().replace(/\s+/g, "")}`,
      borderColor: colorScheme.borderColor,
      gradient: colorScheme.gradient,
      url: member.linkedinUrl || "#",
    };
  });
}

function SpotlightCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const [spot, setSpot] = useState<{ x: number; y: number } | null>(null);
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5"
      onMouseMove={(e) => {
        const rect = (
          e.currentTarget as HTMLDivElement
        ).getBoundingClientRect();
        setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => setSpot(null)}
      style={
        spot
          ? {
              backgroundImage: `radial-gradient(180px circle at ${spot.x}px ${spot.y}px, rgba(255,255,255,0.12), transparent 40%)`,
            }
          : undefined
      }
    >
      <div className="relative z-10">
        <p className="text-white font-medium truncate">{title}</p>
        <p className="text-zinc-400 text-sm truncate">{subtitle}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
    </div>
  );
}

export default function Team() {
  const [active, setActive] = useState<TabKey>("core");

  return (
    <>
      <div className="bg-black min-h-screen flex flex-col px-4 md:px-8 pt-30">
        <div className="pt-16 pb-8 justify-center flex w-full">
          <h1 className="text-4xl md:text-5xl text-white font-bold tracking-tight">
            Our Team
          </h1>
        </div>

        <PillNav active={active} onChange={setActive} />

        <div className="mt-10">
          {active === "core" && (
            <div style={{ height: "100%", position: "relative" }}>
              <ChromaGrid
                items={transformCoreMembers(coreMembers)}
                radius={350}
                damping={0.4}
                fadeOut={0.7}
                ease="power3.out"
                className="w-full h-full"
              />
            </div>
          )}

          {active === "senior" && (
            <div className="transition-all duration-500 ease-out">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {seniorMembers.map((m) => (
                  <SpotlightCard key={m.id} title={m.name} subtitle={m.role} />
                ))}
              </div>
            </div>
          )}

          {active === "members" && (
            <div className="transition-all duration-500 ease-out">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {members.map((m) => (
                  <SpotlightCard key={m.id} title={m.name} subtitle={m.role} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
