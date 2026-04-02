import type { Course } from "../types";

export const whatYourBodyNeeds: Course = {
  id: "what-your-body-needs",
  slug: "what-your-body-needs",
  title: "How to Think About It",
  subtitle: "The frameworks that change how you see your body",
  description:
    "A small set of powerful mental models — the lenses that connect anatomy to daily life and make everything in The Practice make sense.",
  status: "available",
  accent: "#5A8FAA",
  groups: [
    {
      id: "mobility-stability",
      label: "Mobility vs. Stability",
      subtitle:
        "Why some joints need to move freely, and others need to hold — and what happens when they get confused",
      icon: "⇌",
      accent: "#7BA688",
      level: 3,
      cards: [
        {
          id: "joint-by-joint",
          term: "The Joint-by-Joint Approach",
          brief:
            "Joints alternate between needing mobility (freedom to move) and needing stability (resistance to unwanted movement) — and when a mobility joint loses range, the stability joint above or below it is forced to compensate.",
          mnemonic:
            "Mobility-Stability-Mobility-Stability up the chain, from ankle to skull. When mobility is lost at one joint, the stability joint takes up the slack — doing a job it wasn't designed for, and eventually breaking down.",
          tabs: [
            {
              label: "The Concept",
              content:
                "Developed by physical therapist Gray Cook and strength coach Mike Boyle, the Joint-by-Joint approach maps the mobility and stability demands of each joint in the kinetic chain: ankle (mobility), knee (stability), hip (mobility), lumbar spine (stability), thoracic spine (mobility), scapula (stability), glenohumeral joint (mobility), elbow (stability), wrist (mobility). When a mobility joint loses range — tight hips, stiff thoracic spine, limited ankles — the adjacent stability joint compensates by moving into ranges it was not designed for. This is the fundamental mechanism behind most chronic musculoskeletal pain patterns: the lumbar spine moving when it should be stable (because the hip or thoracic spine won't), or the knee rotating when it should be stable (because the hip won't externally rotate adequately).",
            },
            {
              label: "Why It Matters",
              content:
                "The most common manifestation: the hip loses mobility → the lumbar spine compensates by rotating and extending → lumbar disc and facet joint pathology follows. Or: the ankle loses dorsiflexion → the knee compensates by collapsing inward → patellofemoral pain and ACL stress follow. Restoring mobility at the correct joint is the intervention — not treating the pain at the stability joint.",
            },
            {
              label: "What To Do",
              content: [
                "Hip mobility: 90/90, pigeon, hip CARs",
                "Thoracic mobility: thoracic extension over foam roller, rotation drills",
                "Ankle mobility: dorsiflexion drills, calf stretching",
                "Knee stability: terminal knee extension, single-leg squat",
              ],
            },
          ],
        },
        {
          id: "thoracic-mobility",
          term: "Thoracic Mobility",
          brief:
            "The mid-back should be the body's primary rotational region — but it is chronically stiff in most people, forcing the lumbar spine and neck to compensate for every twist and reach.",
          mnemonic:
            "The thoracic spine is the trunk of the body's rotational tree. When the trunk is stiff, the branches (neck, lower back) bend more than they should — and eventually break.",
          tabs: [
            {
              label: "The Concept",
              content:
                "The thoracic spine consists of 12 vertebrae and is the primary region for spinal rotation — each level contributes a few degrees of rotation, totaling approximately 35-50 degrees of rotation for the full thoracic spine. Its facet joints are oriented to permit rotation (unlike lumbar facets, which are vertically oriented and restrict it). Chronic thoracic kyphosis — accelerated by sitting, screens, and stress — removes the thoracic spine's rotational capacity. Research confirms that thoracic kyphosis increases at approximately 2.28 degrees per decade of life and is strongly associated with decreased muscle mass (UK Biobank, 2024). When thoracic rotation is lost, the lumbar spine (which should be stable) is forced to rotate compensatorily — compressing lumbar discs asymmetrically. Simultaneously, the shoulder complex loses its base of support, increasing impingement risk. Physical therapist research confirms that thoracic mobilization — adding rotation and extension work to a stiff thoracic spine — produces measurable improvements in lumbar pain, cervical pain, and shoulder function.",
            },
            {
              label: "Why It Matters",
              content:
                "Thoracic stiffness is one of the most undertreated contributors to both lower back pain and shoulder impingement. When the thoracic spine does not rotate adequately for overhead movements, the shoulder compensates with excessive glenohumeral movement — compressing the rotator cuff against the acromion. This is also why spinal twists are among the most important practices in this curriculum.",
            },
            {
              label: "What To Do",
              content: [
                "Thoracic rotation stretch",
                "thoracic extension over foam roller",
                "cat-cow with focus on thoracic segments",
                "thread-the-needle stretch",
                "spinal twists",
                "yoga poses that demand thoracic rotation (revolved triangle, half lord of the fishes)",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "reading-the-chain",
      label: "How to Read Your Body",
      subtitle:
        "The skill of tracing symptoms back to their source",
      icon: "⇌",
      accent: "#5A8FAA",
      level: 3,
      cards: [
        {
          id: "pain-not-source",
          term: "The Site of Pain Is Not the Source",
          brief:
            "The body compensates silently. By the time something hurts, the problem has usually been somewhere else for months.",
          mnemonic:
            "The check engine light is not the engine problem. Treating only where it hurts — without asking why it hurts there — is changing the light bulb.",
          tabs: [
            {
              label: "The Idea",
              content:
                "When one part of the body can't do its job — a stiff joint, a weak muscle, a restricted fascia — the body doesn't stop moving. It reroutes. An adjacent joint picks up the slack, doing work it wasn't designed for. This compensation is silent at first. You don't feel anything wrong because the body is solving the problem for you. But the compensating structure is now under chronic, inappropriate load. Over weeks and months, that load accumulates — until the compensating structure reaches its tolerance limit. That's when you feel pain. The pain is real, but it's the last domino, not the first. The actual problem — the joint or muscle that stopped doing its job — is often painless, quiet, and somewhere else entirely.",
            },
            {
              label: "Why It Changes Everything",
              content:
                "This reframe changes how you approach every ache and restriction. Instead of asking only \"what hurts?\" you start asking \"what stopped working that made this hurt?\" It explains why foam rolling and stretching the painful area often provides only temporary relief — because the load returns as soon as you stop, since the source hasn't changed. It explains why the same injury keeps coming back after treatment. And it's why the most effective movement practitioners spend more time assessing above and below the pain than at the pain itself.",
            },
            {
              label: "What to Ask",
              content: [
                "Where does it hurt? (the symptom — acknowledge it, but don't stop here)",
                "What moves above it? (is the joint above restricted, forcing this area to compensate?)",
                "What moves below it? (is the joint below stiff or weak, sending excess load upward?)",
              ],
            },
          ],
        },
        {
          id: "body-as-system",
          term: "The Body Is a System, Not a Collection of Parts",
          brief:
            "Every isolated fix that fails is evidence of a system that wasn't addressed.",
          mnemonic:
            "You don't fix a traffic jam by widening one intersection. You model the whole network. The body is the same — one restriction changes flow everywhere downstream.",
          tabs: [
            {
              label: "The Idea",
              content:
                "The body is not a machine made of independent components. It is a continuous, interconnected system — muscles linked by fascia, joints linked by kinetic chains, movement patterns linked by the nervous system. When you treat one part in isolation — stretching only the tight muscle, strengthening only the weak one, releasing only the painful spot — you are intervening in a network without considering the network. This is why so many common approaches fail: the hamstring that keeps getting tight despite years of stretching (because the restriction is in the calf or thoracolumbar fascia), the shoulder that keeps getting impinged despite rotator cuff exercises (because the thoracic spine won't rotate), the knee that keeps hurting despite quad strengthening (because the hip can't stabilize in the frontal plane). Each of these is a systems problem treated as a parts problem.",
            },
            {
              label: "Why It Changes Everything",
              content:
                "Once you see the body as a system, you stop chasing symptoms. You start asking what pattern produced this symptom. You stop treating muscles and start treating movement. You stop isolating and start integrating. This is the shift from reactive treatment to proactive understanding — and it's what separates the person who keeps getting injured from the person who finally stops.",
            },
            {
              label: "An Example",
              content:
                "A person has chronic lower back pain. The isolated approach: stretch the lower back, strengthen the core, take anti-inflammatories. The systems approach: check ankle dorsiflexion (restricted — heels rise in a squat), check hip mobility (limited external rotation — femur internally rotates during movement), observe the knee (collapses inward under load — valgus), observe the hip (drops on one side — Trendelenburg sign), observe the lumbar spine (compensating with rotation and extension it wasn't designed for). One restriction at the ankle created a chain of compensations through the knee, hip, and into the lower back. Five symptoms. One source. The fix isn't a back exercise — it's restoring ankle mobility and hip control. The back pain resolves because the system no longer needs the back to compensate.",
            },
          ],
        },
      ],
    },
  ],
};
