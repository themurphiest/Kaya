import type { Course } from "../types";

export const whatYourBodyNeeds: Course = {
  id: "what-your-body-needs",
  slug: "what-your-body-needs",
  title: "What Your Body Needs",
  subtitle: "Why movement matters — and what to prioritize",
  description:
    "The case for mobility, the framework for action, and the principles that connect anatomy to daily life.",
  status: "available",
  accent: "#5A8FAA",
  groups: [
    {
      id: "why-movement-matters",
      label: "Why Movement Matters After 40",
      subtitle:
        "The science of aging, inactivity, and what you can do about it",
      icon: "◎",
      accent: "#5A8FAA",
      level: 2,
      cards: [
        {
          id: "aging-and-movement",
          term: "Aging & Movement",
          brief:
            "The body loses muscle, bone density, and range of motion with age — but research shows that most of this decline is driven by inactivity, not aging itself, and is substantially reversible with movement.",
          mnemonic:
            "Aging is not the thief. Inactivity is. Age sets the rate of decline — but movement determines whether that decline happens at all.",
          bodyMap: undefined,
          tabs: [
            {
              label: "The Concept",
              content:
                "The age-related loss of muscle mass and function — clinically termed sarcopenia — begins in the third decade of life and accelerates after 60. Research published in Physiological Reviews (Larsson et al., 2019) confirmed that muscle mass declines at approximately 1% per year from middle age, and in severe cases can result in a loss of up to 50% of muscle mass by the eighth or ninth decade. By the seventh and eighth decade, maximal strength decreases on average by 20-40% for both men and women (Doherty, 2003, Journal of Applied Physiology). Simultaneously, the thoracic spine stiffens: a systematic review published in the Journal of Orthopaedic Surgery and Research (Zappala et al., 2021) confirmed a moderate positive correlation between age and thoracic kyphosis — with hyperkyphosis (forward rounding of the upper back greater than 40 degrees) affecting 20-40% of adults over 60. A large UK Biobank study of over 41,000 participants found that kyphosis angle increases approximately 2.28 degrees per decade of life — and that increased spinal curvature is strongly associated with decreased muscle mass (medRxiv, 2024). This is the chain: inactivity → muscle loss → reduced spinal support → progressive kyphosis → reduced mobility → further inactivity.",
            },
            {
              label: "Why It Matters",
              content:
                "The critical reframe is this: most of what people attribute to \"getting older\" is more accurately attributed to moving less. Harvard Health (2021) summarizes the consensus: one of the most important causes of reduced strength and coordination with aging is reduced physical activity — not the passage of time itself. And the good news, confirmed by NIA-supported research conducted over more than 40 years, is that resistance and mobility training can maintain or increase muscle strength at any age, slow the loss of bone density, and preserve the range of motion that makes daily life functional. The body does not stop responding to movement. It continues to respond for the rest of a person's life.",
            },
            {
              label: "What To Do",
              content: [
                "The National Institute on Aging recommends four types of exercise for older adults: endurance (continuous movement like walking), strength (resistance training at least twice weekly), balance (single-leg work, yoga, tai chi), and flexibility (stretching and mobility work)",
                "Of these, flexibility and mobility training are the most underprescribed — and the most directly connected to the practices in this curriculum",
              ],
            },
          ],
        },
        {
          id: "freedom-framework",
          term: "The Freedom Framework",
          brief:
            "Mobility and flexibility are not about performance or touching your toes — they are about the physical freedom to live without unnecessary limitation.",
          mnemonic:
            "No one wants to be the person who can't kneel to garden, can't lift their arms overhead, can't get up from the floor without help. Mobility isn't about what you can do in a yoga class — it's about what you can do the rest of the time.",
          bodyMap: undefined,
          tabs: [
            {
              label: "The Concept",
              content:
                "Physical therapist Grayson Wickham articulates what research consistently confirms: as we age, we lose the ability to access full ranges of motion without pain or compensation — and that compensation happens when there's limited mobility in key joints. The knee and ankle move more than they should to allow the body to move the way it's being asked to. The back overarches when the shoulder can't reach. Research published in Arthritis Care & Research shows that mobility-focused exercise programs reduce joint stiffness, pain, and disability in people with osteoarthritis. The American College of Sports Medicine confirms that flexibility training improves posture, reduces musculoskeletal injuries, and enhances functional capacity in older populations. And studies on tai chi and yoga — two practices that combine mobility, balance, and strength — show scientifically verified reductions in fall risk, improved balance, and better overall quality of life in older adults. The freedom to walk to the park, kneel in the garden, lift groceries, or dance at a family wedding is not a small thing. It is the whole thing.",
            },
            {
              label: "Why It Matters",
              content:
                "One in four adults over age 65 falls each year — and once a person falls, the risk of falling again increases significantly. Research shows that balance is independently predictive of longevity. Mobility and proprioception work — the exact practices in this curriculum — are among the most effective and accessible fall-prevention interventions available.",
            },
            {
              label: "What To Do",
              content: [
                "Hip mobility (pigeon, 90/90)",
                "ankle dorsiflexion (malasana, calf stretching)",
                "thoracic rotation (spinal twists, thread-the-needle)",
                "balance training (single-leg work, tree pose)",
                "strength work through full range of motion",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "kinetic-chain",
      label: "The Kinetic Chain & Injury",
      subtitle: "Why the injury site is often not the problem site",
      icon: "⟶",
      accent: "#5A8FAA",
      level: 2,
      cards: [
        {
          id: "the-kinetic-chain",
          term: "The Kinetic Chain",
          brief:
            "A framework for understanding the body as a linked system — where movement (and dysfunction) at one joint affects every joint connected to it.",
          mnemonic:
            "A bicycle chain. If one link is bent or broken, the whole chain runs poorly. Fix only the bent link without fixing why it bent — and it bends again.",
          bodyMap: undefined,
          tabs: [
            {
              label: "The Concept",
              content:
                "The kinetic chain concept, adapted from engineering by Dr. Arthur Steindler (1955) and widely applied in sports medicine and rehabilitation, describes the body as a series of interconnected segments — joints and muscles — where movement in one segment inevitably influences adjacent segments. A peer-reviewed PMC study (2023) defines the kinetic chain as \"the body's intricate coordination of various segments to perform a specific activity involving precise positioning, timing, and speed.\" The body core (lumbopelvic-hip complex) is the central hub through which forces are transferred between the upper and lower extremities. Disruption at any link — limited ankle mobility, weak hip abductors, restricted thoracic rotation — creates compensatory loading elsewhere. Over time, compensated joints develop pathology from loads they were not designed to sustain.",
            },
            {
              label: "Why It Matters",
              content:
                "Any blockage or defect in the kinetic chain creates compensatory patterns and overuse injuries in adjacent structures (PMC, 2023). The clinical implication: treatment of the symptomatic site without assessment of the chain above and below it will reliably fail.",
            },
            {
              label: "What To Do",
              content: [
                "Kinetic chain assessment (overhead squat, single-leg deadlift, walking gait)",
                "movement pattern correction starting from the base of the chain",
              ],
            },
          ],
        },
        {
          id: "proximal-distal-force",
          term: "Proximal-to-Distal Force Transfer",
          brief:
            "Power and stability generated at the center of the body (pelvis, core) are transmitted outward to the extremities — the source of most athletic power and most athletic injury.",
          mnemonic:
            "A bullwhip generates force at the handle (proximal) and delivers it at the tip (distal). A weak handle creates a limp whip. A strong, stable core creates powerful extremities — and a weak core forces the extremities to generate their own stability.",
          bodyMap: undefined,
          tabs: [
            {
              label: "The Concept",
              content:
                "Proximal-to-distal sequencing describes the biomechanical principle that efficient movement begins with stabilization and force generation at the proximal segments (core, hip, shoulder girdle) before the force is transferred to the distal segments (forearm, hand, foot). This principle applies to throwing, kicking, punching, and all explosive sports movements. PMC research confirms that \"the contribution of more body segments in the total force output leads to higher potential velocity at the distal part.\" When the proximal segments (core and hip) are insufficient, the distal segments (elbow, knee, ankle) are forced to compensate — generating forces they cannot safely sustain, leading to overuse injury.",
            },
            {
              label: "Why It Matters",
              content:
                "\"Tennis elbow\" in recreational players is often a wrist and forearm problem driven by insufficient core and shoulder rotation. Pitcher's elbow is driven by inadequate hip rotation and core stability forcing the elbow to compensate. In both cases, treating only the elbow while ignoring the chain is why these injuries recur.",
            },
            {
              label: "What To Do",
              content: [
                "Rotational medicine ball throws",
                "cable chops",
                "hip-to-shoulder integrated movements",
                "any exercise that loads the core before the extremities",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "mobility-stability",
      label: "Mobility vs. Stability",
      subtitle:
        "Why some joints need to move freely, and others need to brace — and what happens when they get confused",
      icon: "⇌",
      accent: "#7BA688",
      level: 2,
      cards: [
        {
          id: "joint-by-joint",
          term: "The Joint-by-Joint Approach",
          brief:
            "Joints alternate between needing mobility (freedom to move) and needing stability (resistance to unwanted movement) — and when a mobility joint loses range, the stability joint above or below it is forced to compensate.",
          mnemonic:
            "Mobility-Stability-Mobility-Stability up the chain, from ankle to skull. When mobility is lost at one joint, the stability joint takes up the slack — doing a job it wasn't designed for, and eventually breaking down.",
          bodyMap: undefined,
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
          bodyMap: undefined,
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
  ],
};
