import type { Course } from "../types";

export const whatModernLifeDoes: Course = {
  id: "what-modern-life-does",
  slug: "what-modern-life-does",
  title: "What Modern Life Does To It",
  subtitle: "How the pieces work together",
  description:
    "The patterns, syndromes, and principles that explain why your body moves — and breaks down — the way it does.",
  status: "available",
  accent: "#C4875A",
  groups: [
    {
      id: "pelvic-tilt",
      label: "The Pelvic Tilt Problem",
      subtitle:
        "Why your pelvis position is the most consequential postural choice your body makes",
      icon: "↗",
      accent: "#C4875A",
      level: 2,
      cards: [
        {
          id: "pelvis-spine-connection",
          term: "The Pelvis-Spine Connection",
          image: "pelvis-spine-connection.png",
          brief:
            "The position of the pelvis directly determines the shape of the lumbar spine — they are not independent structures but two parts of the same system.",
          mnemonic:
            "The pelvis and lumbar spine are like two gears in a clock. Turn one and the other turns with it — automatically and immediately. You cannot change your lumbar position without changing your pelvic position.",

          tabs: [
            {
              label: "The Concept",
              content:
                "The lumbar spine sits directly on top of the sacrum, which is the posterior anchor of the pelvis. Their relationship is immediate and reciprocal: anterior pelvic tilt (the front of the pelvis dropping forward) increases lumbar lordosis. Posterior pelvic tilt (the front rising, the back dropping) reduces or reverses the lumbar curve. This is why the simple act of tucking the pelvis (posterior tilt) in cat-cow instantly changes the shape of the lower back — and why someone's pelvic position while sitting is inseparable from their lumbar pain pattern. Research from PMC's spine sagittal balance literature confirms that cervical lordosis, thoracic kyphosis, lumbar lordosis, and pelvic anatomy must all maintain a harmonious relationship for minimum energy expenditure and spinal health.",
            },
            {
              label: "Why It Matters",
              content:
                "When the pelvis is chronically tilted forward (anterior tilt), the posterior lumbar disc and facet joints are chronically compressed. When chronically tilted backward (posterior tilt), the anterior disc is chronically loaded. Neither is inherently pathological — the problem arises when a fixed position removes adaptability and loads the same structures repeatedly without variation.",
            },
            {
              label: "What To Do",
              content: [
                "Cat-cow (conscious exploration of the full range)",
                "pelvic tilts supine",
                "standing pelvic awareness exercises",
                "posterior pelvic tilt exercises for back pain",
              ],
            },
          ],
        },
        {
          id: "lower-crossed-syndrome",
          term: "Lower Crossed Syndrome",
          image: "lower-crossed-syndrome.png",
          brief:
            "The most common postural dysfunction in the modern world — a predictable pattern of tight hip flexors and weak glutes creating anterior pelvic tilt and low back pain.",
          mnemonic:
            "Draw an X across the front of the pelvis. Tight hip flexors (front) cross with weak glutes (back). Weak abdominals (front) cross with tight erector spinae (back). The X tells you who to stretch and who to strengthen.",

          tabs: [
            {
              label: "The Concept",
              content:
                'Vladimir Janda identified Lower Crossed Syndrome (LCS) as a characteristic pattern of alternating muscle tightness and weakness centered on the pelvis. The tight muscles: hip flexors (iliopsoas, rectus femoris) and lumbar extensors (erector spinae). The weak muscles: deep abdominals (TVA, obliques) and gluteals (maximus and medius). This imbalance creates anterior pelvic tilt, increased lumbar lordosis, and compensatory thoracolumbar junction stiffness. Physiopedia\'s clinical review notes that LCS is associated with anterior pelvic tilt, increased lumbar lordosis, and compensatory adjustments throughout the kinetic chain. LCS is not a disease — it is the predictable result of how most modern humans live: sitting for prolonged periods, which shortens hip flexors, while the glutes are unloaded and inhibited.',
            },
            {
              label: "Why It Matters",
              content:
                "LCS is implicated in anterior pelvic tilt-driven lower back pain, hip flexor strains, hamstring tightness (compensating for weak glutes), sacroiliac joint dysfunction, and patellofemoral knee pain. Hamstring tightness in LCS is often not a flexibility problem — it's a compensation pattern. Stretching only the hamstrings without addressing the root cause (weak glutes, tight hip flexors) provides temporary relief at best.",
            },
            {
              label: "What To Do",
              content: [
                "Hip flexor stretching (couch stretch, warrior I)",
                "glute activation (bridges, clamshells, hip thrusts)",
                "core stability work (dead bug, bird dog)",
                "cat-cow for pelvic mobility",
              ],
            },
          ],
        },
        {
          id: "cat-cow-diagnostic",
          term: "Cat-Cow as a Diagnostic Tool",
          brief:
            "The yoga cat-cow sequence is far more than a warm-up stretch — it is a window into pelvic mobility, spinal segmental movement, and core coordination.",
          mnemonic:
            "Cat = posterior pelvic tilt (tucking under, rounding the spine). Cow = anterior pelvic tilt (arching, letting the belly drop). Moving between them consciously reveals where your spine is stiff and where it compensates by moving too much.",

          tabs: [
            {
              label: "The Concept",
              content:
                "Cat-cow (Marjaryasana-Bitilasana in Sanskrit) cycles the spine between full flexion and full extension. In the cow position, the pelvis anteriorly tilts, the lumbar spine extends (arches), and the chest opens. In the cat position, the pelvis posteriorly tilts, the lumbar spine flexes (rounds), and the thoracic spine rounds. When done slowly and with attention, the sequence reveals several key patterns: stiff thoracic segments that don't flex or extend (compensation moves to lumbar), anterior or posterior pelvic tilt biases, restricted hip flexor or hamstring range, and poor coordination between pelvic movement and spinal movement. For practitioners and clinicians, cat-cow is one of the most informative movement screens available. For learners, it is the first concrete experience of conscious pelvic control.",
            },
            {
              label: "Why It Matters",
              content:
                "Cat-cow is rarely harmful and is widely recommended for disc-related lower back pain. The risks are minimal — moving too aggressively into end-range spinal flexion with loaded discs is the main caution.",
            },
            {
              label: "What To Do",
              content: [
                "The full sequence activates erector spinae, multifidus, rectus abdominis, TVA, hip flexors, and glutes in an integrated, coordinated pattern",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "screens-upper-body",
      label: "What Screens Do to Your Upper Body",
      subtitle:
        "The predictable patterns of tightness and weakness that create postural dysfunction",
      icon: "✕",
      accent: "#8A6AAA",
      level: 2,
      cards: [
        {
          id: "upper-crossed-syndrome",
          term: "Upper Crossed Syndrome",
          image: "upper-crossed-syndrome.png",
          brief:
            "The posture of modern life — tight chest and upper traps cross with weak deep neck flexors and lower traps, creating forward head posture and shoulder impingement.",
          mnemonic:
            "Draw an X across the upper body. Tight pecs (front, below) cross with tight upper traps (back, above). Weak deep neck flexors (front, above) cross with weak lower traps and rhomboids (back, below). This X creates the hunched, forward-head posture visible in almost every person using a screen.",

          tabs: [
            {
              label: "The Concept",
              content:
                "Upper Crossed Syndrome (UCS), described by Vladimir Janda, involves a characteristic pattern of overactivity in the pectoralis major/minor and upper trapezius, paired with underactivity in the deep cervical flexors and lower/middle trapezius and serratus anterior. The result is a predictable postural change: forward head posture, increased cervical lordosis, thoracic kyphosis, elevated and protracted (forward) shoulders, and reduced glenohumeral joint space. UCS is nearly universal in people who spend significant time at screens and is the primary driver of neck pain, tension headaches, and shoulder impingement in the general population. Physiopedia's clinical review notes that this pattern creates observable postural changes that are now endemic in modern populations.",
            },
            {
              label: "Why It Matters",
              content:
                "The forward head position of UCS increases the effective weight of the head on the cervical spine — for every inch of forward head posture, the perceived load on the neck increases by approximately 10 pounds. This chronic loading contributes to cervical disc compression, tension headaches, and shoulder impingement through reduced subacromial space. Research has confirmed that changes in sitting posture directly affect shoulder range of motion in all directions tested — meaning the way you sit at a screen measurably changes what your shoulder can do (Quek et al., 2013).",
            },
            {
              label: "What To Do",
              content: [
                "Pec stretching",
                "chin tucks (deep cervical flexor activation)",
                "lower trap exercises (prone Y-raise, face pull)",
                "thoracic extension over foam roller",
                "shoulder external rotation work",
              ],
            },
          ],
        },
        {
          id: "compensation-pattern",
          term: "The Compensation Pattern",
          image: "compensation-pattern.png",
          brief:
            "When one part of the kinetic chain fails, an adjacent joint takes over its role — doing a job it was not designed for, eventually breaking down itself.",
          mnemonic:
            "When the weakest link in a chain breaks, the load doesn't disappear — it transfers to the next link. The body does the same thing. The site of pain is often not the site of the problem.",

          tabs: [
            {
              label: "The Concept",
              content:
                "Compensation patterns are the body's adaptive response to movement dysfunction. When a joint or muscle fails to perform its designed role, the kinetic chain reorganizes to maintain function — but at the cost of loading adjacent structures inappropriately. Classic examples: limited ankle dorsiflexion → excessive knee valgus during squatting; glute max weakness → lumbar hyperextension during hip extension; upper trap dominance → shoulder impingement during overhead movement. In each case, the site of eventual pain is not where the dysfunction originated. This is why treating only the symptomatic site — without identifying and addressing the root cause — typically leads to temporary relief followed by recurrence. The most important clinical skill in movement assessment is tracing the chain from symptom back to source.",
            },
            {
              label: "Why It Matters",
              content:
                "Compensation patterns, if allowed to persist, eventually load passive structures (ligaments, joint capsules, discs) beyond their design tolerances. Unlike muscles, these structures have limited healing capacity — making early identification and correction of compensation patterns essential for long-term joint health.",
            },
            {
              label: "What To Do",
              content: [
                "Movement screening to identify compensation (overhead squat, single-leg squat, hip extension pattern)",
                "addressing root cause before treating symptoms",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "fascial-body",
      label: "The Fascial Body",
      subtitle: "The continuous tension line from your heel to your skull",
      icon: "∥",
      accent: "#4AADA8",
      level: 2,
      cards: [
        {
          id: "superficial-back-line",
          term: "The Superficial Back Line",
          image: "superficial-back-line.png",
          brief:
            "A continuous myofascial line running from the sole of the foot to the top of the skull — the body's longest and most clinically significant fascial chain.",
          mnemonic:
            "Think of the Superficial Back Line as a single long guitar string running up the back of your body. Tighten one end (the plantar fascia) and the whole string vibrates — including the far end (the suboccipital muscles at the base of your skull).",

          tabs: [
            {
              label: "The Concept",
              content:
                'Mapped by Thomas Myers in Anatomy Trains (4th ed., Elsevier, 2020) and supported by dissection research (Wilke et al., 2016), the Superficial Back Line (SBL) runs: plantar fascia → Achilles tendon → gastrocnemius/soleus → hamstrings → sacrotuberous ligament → thoracolumbar fascia → erector spinae → nuchal ligament → scalp fascia. This is not a metaphor — each transition point has been verified anatomically as a continuous fascial connection. The practical implication is profound: "hamstring tightness" is often a manifestation of tension anywhere along this line — tight calves, a stiff thoracolumbar fascia, or even a restricted suboccipital region. Treatment that addresses only the hamstrings while ignoring the rest of the line will provide only temporary relief.',
            },
            {
              label: "Why It Matters",
              content:
                "Plantar fasciitis — inflammation at the very base of the SBL — is often accompanied by calf tightness, hamstring restriction, and lower back pain. These are not separate problems — they are one problem expressed at multiple locations along the same line.",
            },
            {
              label: "What To Do",
              content: [
                "Forward fold with progression from ankle to neck",
                "full-body foam rolling along the posterior chain",
                "yoga sequences emphasizing the posterior body",
              ],
            },
          ],
        },
        {
          id: "why-stretching-doesnt-work",
          term: "Why Stretching Doesn't Always Work",
          image: "why-stretching-doesnt-work.png",
          brief:
            "Stretching a single muscle provides only temporary relief when the restriction is part of a continuous fascial chain — you have to address the whole line.",
          mnemonic:
            "Imagine a sweater that's been snagged. Pulling on the snagged area makes it worse. You have to find where it caught and release it there — not just at the point of tightness.",

          tabs: [
            {
              label: "The Concept",
              content:
                "When the body experiences tension in a myofascial line, it distributes that tension across the entire chain. Stretching an isolated muscle (like the hamstring) temporarily increases its length locally, but if the restriction originates elsewhere in the chain (calves, thoracolumbar fascia), the tension returns quickly as the chain re-establishes its global tension. This is why many people stretch their hamstrings for years with minimal lasting change. Effective treatment addresses the full line — mobilizing the plantar fascia, releasing the calves, working the thoracolumbar region, and then reassessing hamstring length. This principle applies to all myofascial lines, not just the SBL.",
            },
            {
              label: "Why It Matters",
              content:
                'Aggressive, repeated isolated stretching of a symptomatic site can actually increase irritation. If a muscle is "tight" because it\'s bearing load from a restricted chain, repeatedly stretching it while the chain remains restricted creates persistent microtrauma at the symptomatic site.',
            },
            {
              label: "What To Do",
              content: [
                "Sequential chain mobilization: plantar fascia rolling → calf stretching → hamstring lengthening → lumbar mobility → neck mobility",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "core-stability",
      label: "Core Stability vs. Strength",
      subtitle:
        "Why planks matter more than crunches — and why they're not the same thing",
      icon: "▣",
      accent: "#6B8FBF",
      level: 2,
      cards: [
        {
          id: "stability-vs-strength",
          term: "Stability vs. Strength",
          image: "stability-vs-strength.png",
          brief:
            "Core strength measures how much force the trunk muscles can produce. Core stability measures how well they coordinate to protect the spine — and it's stability, not strength, that prevents injury.",
          mnemonic:
            "A skyscraper doesn't stand because its steel is the strongest available — it stands because the forces within it are coordinated and distributed efficiently. A strong core without stability is a skyscraper with misaligned beams.",

          tabs: [
            {
              label: "The Concept",
              content:
                'Core strength refers to the maximal force production capacity of the trunk muscles — how much a person can curl, flex, and resist. Core stability refers to the ability of the deep stabilization system (TVA, multifidus, diaphragm, pelvic floor) to co-activate with precise timing and appropriate magnitude to maintain spinal stiffness under varying loads. Stuart McGill\'s research established that most spinal injuries are not caused by muscle weakness but by poor motor control — the wrong muscles activating at the wrong time, or the right muscles failing to activate at all. A person with a strong rectus abdominis but poor deep core coordination is at greater injury risk than someone with modest strength and excellent coordination. This explains why conventional "core work" (crunches, sit-ups) fails to prevent back pain — it trains the wrong qualities.',
            },
            {
              label: "Why It Matters",
              content:
                "Spinal loading studies (McGill, University of Waterloo) show that sit-ups and crunches impose compressive loads on the lumbar spine exceeding safe tolerances for people with disc pathology. The repeated flexion under load — exactly the movement pattern associated with disc herniation — makes these exercises contraindicated for individuals with back pain or disc dysfunction.",
            },
            {
              label: "What To Do",
              content: [
                "McGill's Big Three (bird dog, curl-up, side plank) — designed to build endurance in stabilizers without spinal flexion",
                "Dead bug",
                "Pallof press",
                "plank variations",
              ],
            },
          ],
        },
        {
          id: "anticipatory-core-activation",
          term: "Anticipatory Core Activation",
          image: "anticipatory-core-activation.png",
          brief:
            "A healthy deep core fires before the limbs move — a pre-emptive stability response that is disrupted by pain, injury, and inactivity.",
          mnemonic:
            "A healthy core is like a seatbelt that tightens before a crash — not after. Pain, injury, and sedentary habits turn it into a seatbelt that only responds after impact.",

          tabs: [
            {
              label: "The Concept",
              content:
                "Research by Paul Hodges and Carolyn Richardson (1996, 1998) used electromyography to demonstrate that in healthy individuals, the transverse abdominis activates 30–110 milliseconds before any limb movement — whether lifting an arm, stepping, or throwing. This feedforward activation is automatic and unconscious: the brain anticipates the destabilizing effect of limb movement and pre-stiffens the spine before the movement occurs. In individuals with chronic low back pain, this timing is consistently delayed or absent — the core responds to movement rather than anticipating it. Importantly, this timing impairment persists even after pain resolves, which is why back pain tends to recur without specific rehabilitation. Retraining anticipatory activation — not just strengthening the muscles — is the clinical target.",
            },
            {
              label: "Why It Matters",
              content:
                "The absence of anticipatory core activation means that each movement begins with an unprotected spine. For low-load activities this is manageable; under high loads or unexpected perturbations (tripping, catching a falling object), the unprotected spine is vulnerable to acute injury.",
            },
            {
              label: "What To Do",
              content: [
                "Dead bug (emphasizing TVA pre-activation before limb movement)",
                "bird dog",
                "diaphragmatic breathing to restore coordination",
                "slow deliberate loaded movements with attention to bracing",
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
  ],
};
