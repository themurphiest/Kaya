"use client";

import { useState, useCallback, useRef } from "react";

const SECTIONS = [
  {
    label: "Primary Books",
    refs: [
      { author: "Myers, T.W.", text: "Anatomy Trains: Myofascial Meridians for Manual Therapists & Movement Professionals, 4th ed. Elsevier, 2020" },
      { author: "Neumann, D.A.", text: "Kinesiology of the Musculoskeletal System: Foundations for Rehabilitation, 3rd ed. Elsevier, 2017" },
      { author: "McGill, S.M.", text: "Low Back Disorders: Evidence-Based Prevention and Rehabilitation, 3rd ed. Human Kinetics, 2015" },
      { author: "Cook, G.", text: "Movement: Functional Movement Systems. On Target Publications, 2010" },
    ],
  },
  {
    label: "Peer-Reviewed Research",
    refs: [
      { author: "Hodges PW, Richardson CA", text: "Inefficient muscular stabilization of the lumbar spine associated with low back pain. Spine, 1996" },
      { author: "Wilke J et al", text: "Evidence of myofascial meridians in humans and their role for movement. Archives of Physical Medicine and Rehabilitation, 2016" },
      { author: "Hides JA et al", text: "Multifidus muscle recovery is not automatic after resolution of acute, first-episode low back pain. Spine, 1996" },
      { author: "Petersen J et al", text: "Preventive effect of eccentric training on acute hamstring injuries in men's soccer. American Journal of Sports Medicine, 2011" },
    ],
  },
  {
    label: "Clinical Databases",
    refs: [
      { author: "Physiopedia", text: "peer-reviewed clinical reference (physiopedia.com)" },
      { author: "Brookbush Institute", text: "evidence-based movement science (brookbushinstitute.com)" },
      { author: "NCBI StatPearls", text: "clinical anatomy reference (ncbi.nlm.nih.gov)" },
      { author: "Kenhub", text: "anatomical reference (kenhub.com)" },
    ],
  },
];

export default function SourcesSheet() {
  const [open, setOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const dragStartY = useRef<number | null>(null);
  const dragCurrentY = useRef(0);

  const close = useCallback(() => setOpen(false), []);

  const onTouchStart = (e: React.TouchEvent) => {
    dragStartY.current = e.touches[0].clientY;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (dragStartY.current === null) return;
    const dy = e.touches[0].clientY - dragStartY.current;
    dragCurrentY.current = dy;
    if (dy > 0 && sheetRef.current) {
      sheetRef.current.style.transform = `translateY(${dy}px)`;
    }
  };

  const onTouchEnd = () => {
    if (dragCurrentY.current > 80) {
      close();
    }
    if (sheetRef.current) {
      sheetRef.current.style.transform = "";
    }
    dragStartY.current = null;
    dragCurrentY.current = 0;
  };

  return (
    <>
      {/* Footer trigger */}
      <button
        onClick={() => setOpen(true)}
        className="block mx-auto mt-10 mb-2 border-none cursor-pointer rounded-full px-5 py-2.5 transition-all duration-200 hover:-translate-y-px"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: "0.08em",
          color: "var(--text-muted)",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        ❋ Sources & References
      </button>

      {/* Overlay + sheet */}
      {open && (
        <div
          className="fixed inset-0 z-50"
          onClick={close}
          style={{
            background: "rgba(0,0,0,0.5)",
            animation: "sheetOverlayIn 0.3s ease-out",
          }}
        >
          <div
            ref={sheetRef}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto"
            style={{
              background: "#151D1A",
              borderRadius: "24px 24px 0 0",
              animation: "sheetSlideUp 0.3s ease-out",
            }}
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div
                className="rounded-full"
                style={{
                  width: 40,
                  height: 4,
                  background: "rgba(255,255,255,0.15)",
                }}
              />
            </div>

            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-4 right-5 bg-transparent border-none cursor-pointer text-base"
              style={{ color: "var(--text-muted)" }}
            >
              ✕
            </button>

            <div className="px-6 pt-3 pb-10">
              {/* Header */}
              <h2
                className="text-xl m-0 mb-2"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontStyle: "italic",
                  color: "#fff",
                }}
              >
                Sources & References
              </h2>
              <p
                className="text-[13px] leading-relaxed m-0 mb-5"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                All Kaya content is grounded in peer-reviewed research and
                leading clinical references.
              </p>

              {/* Reference sections */}
              {SECTIONS.map((section, si) => (
                <div key={section.label}>
                  <div
                    className="mb-3"
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                    }}
                  />
                  <div
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase" as const,
                      color: "rgba(255,255,255,0.45)",
                    }}
                  >
                    {section.label}
                  </div>
                  <div
                    className="flex flex-col gap-3"
                    style={{ marginBottom: si < SECTIONS.length - 1 ? 16 : 40 }}
                  >
                    {section.refs.map((ref) => (
                      <p
                        key={ref.author}
                        className="m-0 text-[13px] leading-[1.6]"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontWeight: 300,
                          color: "rgba(255,255,255,0.5)",
                        }}
                      >
                        <span style={{ color: "#fff", fontWeight: 400 }}>
                          {ref.author}
                        </span>
                        {" — "}
                        {ref.text}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes sheetSlideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes sheetOverlayIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}
