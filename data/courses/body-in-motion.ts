import type { Course } from "@/data/types";

const bodyInMotion: Course = {
  id: "body-in-motion",
  slug: "body-in-motion",
  title: "Body in Motion",
  subtitle: "Muscle & Joint Anatomy",
  description:
    "Muscles, joints, and movement patterns — anatomy turned into understanding.",
  status: "available",
  accent: "#4AADA8",
  groups: [
    {
      id: "movement",
      label: "Movement Fundamentals",
      subtitle: "The language of how the body moves",
      icon: "◎",
      accent: "#4AADA8",
      cards: [
        {
          term: "Flexion",
          brief:
            "Bending a joint to decrease the angle between two body parts.",
          mnemonic:
            "Flex = fold. Think of folding a piece of paper — you're folding the joint closed.",
          tabs: [
            {
              label: "Details",
              content:
                "Flexion occurs at nearly every joint in the body. At the elbow, it brings your hand toward your shoulder. At the hip, it lifts your thigh toward your chest. At the spine, it rounds you forward. It's one half of the most fundamental movement pairing in the body — always balanced by its opposite, extension.",
            },
            {
              label: "Activates",
              content: [
                "Bicep curl",
                "Leg curl",
                "Child's pose",
                "Forward fold",
                "Seated row",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Overuse of flexion patterns without extension work creates postural imbalances — tight hip flexors, rounded shoulders, and compressed lumbar discs. Most desk-bound postures are chronic flexion patterns.",
            },
          ],
        },
        {
          term: "Extension",
          brief:
            "Straightening a joint to increase the angle between two body parts.",
          mnemonic:
            "Extension = expand. You're opening and lengthening the joint back toward or past neutral.",
          tabs: [
            {
              label: "Details",
              content:
                "Extension is the counterpart to flexion. It opens joints rather than closing them. At the knee it straightens the leg; at the hip it drives the thigh backward (critical for walking and running power); at the spine it arches you back. Hyperextension — going past neutral — is normal at some joints but can compress structures at others, especially the lumbar spine.",
            },
            {
              label: "Activates",
              content: [
                "Deadlift",
                "Cobra pose",
                "Tricep pushdown",
                "Hip thrust",
                "Back extension",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Lumbar hyperextension compresses the posterior discs and facet joints. Common in gymnasts, dancers, and anyone who repeatedly arches their lower back under load.",
            },
          ],
        },
        {
          term: "Adduction",
          brief: "Moving a limb toward the midline of the body.",
          mnemonic:
            "ADDuction = ADD the limb back to your body. You're adding it toward center.",
          tabs: [
            {
              label: "Details",
              content:
                "Adduction brings a limb inward — arms down to your sides, thighs squeezing together. At the hip, the adductor muscle group (inner thigh) drives this motion. At the shoulder, the lats and pec major are primary adductors. The movement is essential for stabilizing the pelvis during gait and generating power in throwing and striking.",
            },
            {
              label: "Activates",
              content: [
                "Cable fly",
                "Inner thigh squeeze",
                "Yoga eagle arms",
                "Pull-up (lats adduct the arm)",
                "Side-lying leg lower",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Adductor (groin) strains are extremely common in soccer, hockey, and basketball — sports with rapid lateral cutting. The adductor longus is the most frequently torn.",
            },
          ],
        },
        {
          term: "Abduction",
          brief: "Moving a limb away from the midline of the body.",
          mnemonic:
            "ABduction = AB-sent from the body. The limb moves away, like it's leaving.",
          tabs: [
            {
              label: "Details",
              content:
                "Abduction moves limbs outward from center — raising your arm to the side, stepping a leg out laterally. The primary hip abductor is the gluteus medius, which also controls pelvic tilt during walking. Shoulder abduction is driven by the deltoid and supraspinatus. Weakness in hip abductors is one of the most common and consequential movement deficiencies in the general population.",
            },
            {
              label: "Activates",
              content: [
                "Lateral raises",
                "Clamshells",
                "Side-lying leg lift",
                "Warrior II",
                "Lateral band walk",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Weak hip abductors cause the hip to drop on the opposite side during single-leg loading (Trendelenburg sign). Linked to IT band syndrome, runner's knee, and hip pain.",
            },
          ],
        },
        {
          term: "Rotation",
          brief:
            "Turning a body part around its own long axis — inward or outward.",
          mnemonic:
            "Think of a door rotating on its hinge. The joint is the hinge; the limb is the door.",
          tabs: [
            {
              label: "Details",
              content:
                "Rotation describes a limb or segment spinning around its own axis. Internal rotation turns inward (toward the body's midline); external rotation turns outward. The hip and shoulder are the primary rotational joints. Rotational capacity is often undertrained — most gym programs work only in flexion and extension — leaving the body vulnerable to rotational injuries in real life and sport.",
            },
            {
              label: "Activates",
              content: [
                "Cable external rotation",
                "Thread-the-needle stretch",
                "Seated spinal twist",
                "Hip 90/90 stretch",
                "Wood chop",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Limited hip external rotation is a major contributor to lower back pain and hip impingement. At the shoulder, poor rotator cuff control during internal rotation is a primary driver of impingement.",
            },
          ],
        },
        {
          term: "Planes of Motion",
          brief:
            "Three imaginary planes that divide the body and describe the direction of movement.",
          mnemonic:
            "SAGittal = SAGging forward/back. FRONTal = side to side (the front of your body faces you). TRANSverse = TRANSlation, twisting across.",
          tabs: [
            {
              label: "Details",
              content:
                "Every movement occurs within or across these three planes. The sagittal plane divides left from right — squats, lunges, and bicep curls live here. The frontal plane divides front from back — lateral raises and side lunges live here. The transverse plane divides top from bottom — rotational movements live here. Most gym machines work only in the sagittal plane. Real-world movement combines all three simultaneously.",
            },
            {
              label: "Activates",
              content: [
                "Sagittal: squat, deadlift",
                "Frontal: lateral lunge, side raise",
                "Transverse: wood chop, rotational throw",
                "Multi-planar: Turkish get-up",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Training only in the sagittal plane (the most common gym pattern) leaves the body underprepared for frontal and transverse loads — a primary reason people get injured doing everyday rotational or lateral movements.",
            },
          ],
        },
      ],
    },
    {
      id: "upper",
      label: "Upper Body",
      subtitle: "Shoulders, chest, arms & upper back",
      icon: "△",
      accent: "#6B8FBF",
      cards: [
        {
          term: "Rotator Cuff",
          brief:
            "Four muscles that wrap the shoulder joint and hold the ball in the socket.",
          mnemonic:
            "SITS: Supraspinatus, Infraspinatus, Teres minor, Subscapularis. 'The shoulder SITS on four muscles.'",
          tabs: [
            {
              label: "Details",
              content:
                "The rotator cuff is less about power and more about precision — it keeps the humeral head (the ball) centered in the shallow glenoid socket (the cup) during every arm movement. The four muscles act like a dynamic seatbelt for the shoulder. Without their coordinated activation, the deltoid would simply jam the humerus upward into the acromion with every overhead motion.",
            },
            {
              label: "Activates",
              content: [
                "External rotation with band",
                "Face pull",
                "Side-lying ER",
                "Empty can raise",
                "Prone Y-T-W",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "The most commonly torn tendon group in the body. The supraspinatus (top of the cuff) is torn most often — typically from repetitive overhead stress or a fall onto an outstretched arm. Cuff weakness is the underlying cause of most shoulder impingement.",
            },
          ],
        },
        {
          term: "Trapezius",
          brief:
            "A large kite-shaped muscle spanning the upper back and neck with three distinct regions.",
          mnemonic:
            "TRAPezius = it TRAPs the shoulder blade. Think of it like a trapeze holding the scapula in place.",
          tabs: [
            {
              label: "Details",
              content:
                "The trap is actually three muscles in one. The upper trap elevates the shoulder blade and extends the neck — it's chronically overactive in stressed, desk-bound people. The middle trap retracts the scapula (squeezes shoulder blades together). The lower trap depresses the scapula — critical for keeping the shoulder down during overhead movement. Most people need less upper trap and more lower trap activation.",
            },
            {
              label: "Activates",
              content: [
                "Shrugs (upper)",
                "Face pull / row (middle)",
                "Y-raise (lower)",
                "Overhead press (all regions)",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Upper trap dominance from chronic stress and poor posture leads to neck tension, headaches, and impinged shoulders. The upper trap is one of the most chronically hypertonic muscles in modern humans.",
            },
          ],
        },
        {
          term: "Deltoid",
          brief:
            "The rounded three-headed muscle capping the shoulder — each head moves the arm differently.",
          mnemonic:
            "Delta = triangle (Δ). The deltoid is shaped like a triangle draped over the shoulder with three distinct points.",
          tabs: [
            {
              label: "Details",
              content:
                "The anterior (front) deltoid flexes and internally rotates the arm — heavily recruited in pressing movements. The lateral (middle) deltoid abducts the arm — the primary target of lateral raises. The posterior (rear) deltoid extends and externally rotates — critical for shoulder health and posture, yet almost always undertrained relative to the front. Balanced deltoid development requires training all three heads intentionally.",
            },
            {
              label: "Activates",
              content: [
                "Front raise (anterior)",
                "Lateral raise (lateral)",
                "Rear delt fly (posterior)",
                "Arnold press (all three)",
                "Overhead press",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Anterior deltoid overuse from excessive pressing creates internal rotation dominance, compresses the rotator cuff, and contributes to shoulder impingement syndrome.",
            },
          ],
        },
        {
          term: "Pectoralis Major",
          brief:
            "The large fan-shaped chest muscle responsible for pushing and horizontal arm movement.",
          mnemonic:
            "PECTO-ralis = PECKing motion. Think of a bird's wing driving forward — the pec creates that same sweeping movement.",
          tabs: [
            {
              label: "Details",
              content:
                "The pec major has two heads: the clavicular (upper) head flexes the arm and is emphasized by incline pressing; the sternal (lower/larger) head horizontally adducts the arm and is emphasized by flat and decline pressing. The pec connects the humerus to the sternum and clavicle, making it a powerful internal rotator — which is why heavy pressers often develop tight, internally rotated shoulders without counterbalancing pulling and stretching work.",
            },
            {
              label: "Activates",
              content: [
                "Push-up",
                "Bench press",
                "Cable crossover",
                "Dumbbell fly",
                "Dips",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Pec major tendon tears occur most often at the humeral attachment (near the armpit) during heavy bench pressing — usually a sudden force overload. There's an audible pop and immediate visible deformity. Requires surgical repair.",
            },
          ],
        },
        {
          term: "Latissimus Dorsi",
          brief:
            "The broadest muscle in the back — primary mover for pulling the arm down and back.",
          mnemonic:
            "LATissimus = LAT = LATeral width. It makes you wide. 'LAT me pull you down' — it literally pulls the arm toward the hip.",
          tabs: [
            {
              label: "Details",
              content:
                "The lats span from the lower spine, iliac crest, and lower ribs up to the humerus — making them a bridge between the arm and the pelvis. They are the primary muscles used in climbing, rowing, and swimming. The lats also assist in spinal extension and lateral flexion. Tight lats limit overhead shoulder mobility — a common issue in people who train a lot of pulling without adequate stretching.",
            },
            {
              label: "Activates",
              content: [
                "Pull-up",
                "Lat pulldown",
                "Bent-over row",
                "Single-arm dumbbell row",
                "Straight-arm pulldown",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Lat tightness restricts full shoulder flexion (reaching overhead), causing the lumbar spine to hyperextend to compensate. Common in heavy pullers who neglect mobility work.",
            },
          ],
        },
        {
          term: "Biceps Brachii",
          brief:
            "Two-headed muscle on the front of the arm that flexes the elbow and turns the palm up.",
          mnemonic:
            "BI = two heads. BRACHii = arm. Two heads on the arm — and it does two jobs: bend the elbow AND twist the forearm.",
          tabs: [
            {
              label: "Details",
              content:
                "The biceps crosses two joints — the shoulder and the elbow — making it a two-joint muscle. Its often-overlooked second function is supination: turning the palm upward. This is why a supinated (palm-up) curl maximally loads the bicep, while a neutral (hammer) curl shifts emphasis to the brachialis underneath. The brachialis is actually the stronger of the two elbow flexors — the bicep gets the glory, but the brachialis does much of the work.",
            },
            {
              label: "Activates",
              content: [
                "Supinated curl (full bicep)",
                "Hammer curl (brachialis)",
                "Chin-up",
                "Incline dumbbell curl (long head stretch)",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Distal biceps tendon rupture at the elbow — a dramatic 'pop' followed by a visible 'Popeye' bunching of the muscle — typically occurs from sudden eccentric overload (dropping a heavy weight). Proximal tears near the shoulder are more common but less debilitating.",
            },
          ],
        },
        {
          term: "Triceps Brachii",
          brief:
            "Three-headed muscle on the back of the arm that straightens the elbow.",
          mnemonic:
            "TRI = three heads. The tricep makes up ~2/3 of upper arm mass. Want bigger arms? Train your triceps more than your biceps.",
          tabs: [
            {
              label: "Details",
              content:
                "The triceps has three heads: the long head (crosses the shoulder joint — stretched by overhead position), the lateral head (outer arm — the most visible), and the medial head (deep — active in all elbow extension). The long head is only fully stretched when the arm is overhead, which is why overhead tricep extensions are particularly effective for complete development. The tricep also assists in shoulder extension and stabilization.",
            },
            {
              label: "Activates",
              content: [
                "Tricep dip",
                "Close-grip bench",
                "Overhead extension (long head)",
                "Tricep pushdown (lateral/medial)",
                "Skull crusher",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Tricep tendinopathy at the olecranon (back of elbow) presents as aching pain behind the elbow during pressing or extension under load. Common in throwing athletes and heavy bench pressers.",
            },
          ],
        },
      ],
    },
    {
      id: "core",
      label: "Core & Spine",
      subtitle: "The body's center of power and stability",
      icon: "□",
      accent: "#7BA688",
      cards: [
        {
          term: "Rectus Abdominis",
          brief:
            "The paired vertical muscle running down the front of the abdomen — the visible 'six-pack.'",
          mnemonic:
            "RECTUS = straight, running straight down like a ruler. It's the most superficial and visible ab muscle — but not the most important one.",
          tabs: [
            {
              label: "Details",
              content:
                "The rectus abdominis runs from the pubic crest to the sternum and ribs, segmented by tendinous intersections (those visible lines). Its primary action is spinal flexion — rounding the trunk forward. It also compresses the abdomen. Despite its cultural status as the 'core,' it's actually the least functionally important ab muscle for spinal stability — that role belongs to the deeper transverse abdominis.",
            },
            {
              label: "Activates",
              content: [
                "Crunch (partial ROM)",
                "Hanging leg raise",
                "Ab wheel rollout",
                "Boat pose",
                "Dragon flag",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Diastasis recti — a separation of the rectus along the midline linea alba — is common during pregnancy and can occur from excessive intra-abdominal pressure loading. Creates a visible 'gap' or 'dome' when the abs are tensed.",
            },
          ],
        },
        {
          term: "Transverse Abdominis",
          brief:
            "The deepest abdominal layer — the body's internal weight belt and primary spine stabilizer.",
          mnemonic:
            "TRANSverse = crosses TRANSversely (horizontally). Think of it as your internal corset — it wraps around your trunk and cinches it tight.",
          tabs: [
            {
              label: "Details",
              content:
                "The TVA runs horizontally around the abdomen like a corset, from the spine to the front midline. When it contracts, it increases intra-abdominal pressure (IAP) — the hydraulic mechanism that stiffens the spine and protects it from compression. The TVA activates before the limbs move — it's a pre-emptive stabilizer, not a reactive one. After injury or chronic pain, this automatic activation is often disrupted.",
            },
            {
              label: "Activates",
              content: [
                "Dead bug",
                "Hollow body hold",
                "Pallof press",
                "Diaphragmatic breathing",
                "Bird dog",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "A non-activating or weak TVA is strongly associated with chronic lower back pain. Unlike other muscles, the TVA doesn't automatically strengthen with general exercise — it often requires specific retraining.",
            },
          ],
        },
        {
          term: "Erector Spinae",
          brief:
            "Three vertical muscles running along either side of the spine that keep you upright.",
          mnemonic:
            "ERECTOR = it erects you upright. Like the columns of a building, these muscles hold the spine tall against gravity all day long.",
          tabs: [
            {
              label: "Details",
              content:
                "The erectors comprise three muscles: iliocostalis (outermost, controls lateral flexion), longissimus (middle, longest), and spinalis (innermost, closest to the spine). Together they extend the spine, resist forward flexion under load, and laterally bend the trunk. They work continuously during sitting and standing to maintain posture. They're endurance muscles — designed for sustained low-level activation rather than peak power output.",
            },
            {
              label: "Activates",
              content: [
                "Deadlift (isometric hold)",
                "Good morning",
                "Back extension / hyperextension",
                "Bird dog",
                "Superman",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "The most commonly strained back muscles. The classic mechanism: bending forward and rotating to lift something — combining spinal flexion, lateral flexion, and rotation simultaneously under load.",
            },
          ],
        },
        {
          term: "Diaphragm",
          brief:
            "The dome-shaped primary breathing muscle — and a key player in spinal stability.",
          mnemonic:
            "DIA = across, PHRAGM = partition. It's the partition across your trunk. When the dome drops, air rushes in to fill the vacuum.",
          tabs: [
            {
              label: "Details",
              content:
                "The diaphragm is simultaneously a breathing muscle and a core stabilizer. During inhalation, it flattens downward, creating negative pressure that draws air into the lungs. During bracing (like a heavy lift), it contracts to increase intra-abdominal pressure in concert with the TVA, pelvic floor, and multifidus — forming the 'core canister.' Shallow chest breathing that bypasses the diaphragm impairs this pressure system and is associated with chronic low back pain and stress.",
            },
            {
              label: "Activates",
              content: [
                "Crocodile breathing",
                "360° breathing into the sides and back",
                "Box breathing",
                "IAP bracing for lifting",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "A chronically elevated diaphragm (chest breather) impairs core stability, increases injury risk, and keeps the nervous system in a low-grade stress state. Diaphragmatic breathing is a clinical intervention for both back pain and anxiety.",
            },
          ],
        },
        {
          term: "Iliopsoas (Hip Flexors)",
          brief:
            "The primary hip flexor — a composite muscle connecting the spine directly to the thigh.",
          mnemonic:
            "ILIOpsoas = ILIO (ilium/pelvis) + PSOAS (Greek for 'loin'). It literally bridges your spine to your leg — the only muscle that does this.",
          tabs: [
            {
              label: "Details",
              content:
                "The iliopsoas is actually two muscles — the iliacus (from the inner pelvis) and the psoas major (from the lumbar vertebrae) — that unite into a single tendon attaching to the femur. It's the most powerful hip flexor and also a significant lumbar spine stabilizer. Because it attaches directly to the lumbar vertebrae, a tight or overactive psoas pulls the low back into extension and the pelvis into anterior tilt — compressing lumbar discs.",
            },
            {
              label: "Activates",
              content: [
                "Lunge hip flexor stretch",
                "Hanging knee raise",
                "Mountain climber",
                "Warrior I",
                "Psoas march",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Chronic sitting shortens the iliopsoas, causing anterior pelvic tilt and lumbar compression. This is arguably the single most common contributor to low back pain in desk workers. Regular hip flexor stretching and strengthening through full range is essential.",
            },
          ],
        },
      ],
    },
    {
      id: "lower",
      label: "Lower Body",
      subtitle: "Hips, thighs, knees & calves",
      icon: "▽",
      accent: "#5A8FAA",
      cards: [
        {
          term: "Gluteus Maximus",
          brief:
            "The largest muscle in the body — the primary driver of hip extension and lower body power.",
          mnemonic:
            "MAX-imus = the maximum, the biggest. The glute MAX is the main event of the posterior chain. If it's not working, something else is doing its job — and getting hurt.",
          tabs: [
            {
              label: "Details",
              content:
                "The glute max runs from the ilium, sacrum, and coccyx to the femur and iliotibial band. Its primary role is hip extension — driving the thigh backward — which is fundamental to walking, running, jumping, and stair-climbing. It also externally rotates the hip and contributes to pelvic stability. Despite being the body's largest muscle, it is frequently inhibited and underactive — a phenomenon called 'gluteal amnesia' — particularly in people who sit for long periods.",
            },
            {
              label: "Activates",
              content: [
                "Hip thrust",
                "Deadlift",
                "Glute bridge",
                "Step-up",
                "Single-leg hip thrust",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Underactive glutes shift load to the hamstrings and lower back. Hamstring strains, sacroiliac joint pain, and chronic lower back pain are all commonly linked to insufficient glute max activation and strength.",
            },
          ],
        },
        {
          term: "Gluteus Medius",
          brief:
            "The hip stabilizer — controls pelvic level during walking, running, and single-leg movements.",
          mnemonic:
            "MEDius = the middle glute. Think of it as the HIP STABILIZER. Weak glute med = the hip sinks. Strong glute med = the pelvis stays level.",
          tabs: [
            {
              label: "Details",
              content:
                "The glute med fans out on the outer ilium, attaching to the greater trochanter of the femur. Its most critical function is preventing the pelvis from dropping on the opposite side during single-leg stance — the action that occurs with every step you take. In walking and running, it fires on every single stride. It also abducts the hip and assists with internal and external rotation depending on fiber orientation.",
            },
            {
              label: "Activates",
              content: [
                "Clamshell",
                "Side-lying leg raise",
                "Single-leg deadlift",
                "Lateral band walk",
                "Single-leg squat",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Weak glute med is linked to Trendelenburg gait (hip drop), IT band syndrome, runner's knee (patellofemoral pain), and hip bursitis. It's one of the most clinically important muscles in lower body rehabilitation.",
            },
          ],
        },
        {
          term: "Quadriceps",
          brief:
            "Four muscles on the front of the thigh that extend the knee and absorb landing forces.",
          mnemonic:
            "QUAD = four. Four muscles, all pulling on one tendon, driving one motion: knee extension. The VMO (inner quad teardrop shape) is the key for knee tracking.",
          tabs: [
            {
              label: "Details",
              content:
                "The quads — rectus femoris, vastus lateralis, vastus medialis, and vastus intermedius — converge on the patellar tendon, which attaches to the tibial tuberosity below the kneecap. The rectus femoris is unique: it also flexes the hip, crossing two joints. The vastus medialis oblique (VMO) is the lowest, innermost portion — critical for pulling the patella into proper alignment. Quad weakness causes the knee to collapse inward and the patella to track laterally, creating pain and wear.",
            },
            {
              label: "Activates",
              content: [
                "Squat",
                "Leg press",
                "Lunge",
                "Step-down (eccentric)",
                "Terminal knee extension (VMO focus)",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Patellar tendinopathy ('jumper's knee') — pain at the tendon below the kneecap — is the most common quad overuse injury, caused by repetitive explosive loading. Patellofemoral pain syndrome (pain behind the kneecap) is linked to VMO weakness and poor hip control.",
            },
          ],
        },
        {
          term: "Hamstrings",
          brief:
            "Three muscles on the back of the thigh that bend the knee and extend the hip.",
          mnemonic:
            "HAM-strings = they run along the back of the thigh like taut strings. HAM = where a pig's hind leg is cut — the same location as yours.",
          tabs: [
            {
              label: "Details",
              content:
                "The hamstrings — biceps femoris (long and short head), semimembranosus, and semitendinosus — span from the ischial tuberosity (sit bone) to the tibia and fibula. Because they cross both the hip and knee, they simultaneously extend the hip and flex the knee. The hamstrings work eccentrically (lengthening under load) to decelerate the leg during running — this deceleration phase is when most hamstring strains occur.",
            },
            {
              label: "Activates",
              content: [
                "Romanian deadlift (hip hinge, eccentric focus)",
                "Leg curl",
                "Nordic hamstring curl (most evidence-based for injury prevention)",
                "Glute-ham raise",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Hamstring strains are the most common muscle injury in sprinting sports. The biceps femoris long head at the proximal attachment (sit bone) is the most frequent tear site. Nordic curls are the single best-evidenced exercise for prevention.",
            },
          ],
        },
        {
          term: "Adductors (Inner Thigh)",
          brief:
            "Five muscles of the inner thigh that bring the legs together and assist hip movement.",
          mnemonic:
            "ADDuctor = ADD legs together. The inner thighs are the peacemakers — they bring everything back to center. Also think: a horse rider squeezing the saddle.",
          tabs: [
            {
              label: "Details",
              content:
                "The adductor group — adductor longus, brevis, magnus, gracilis, and pectineus — runs from the pubis and ischium to the femur and tibia. The adductor magnus is the largest and strongest, also functioning as a hip extensor via its hamstring portion. The adductors are important for pelvic stability in the frontal plane, controlling how the femur moves during squatting and lunging. They're chronically undertrained in most programs.",
            },
            {
              label: "Activates",
              content: [
                "Sumo squat",
                "Copenhagen plank (highest adductor load)",
                "Lateral lunge",
                "Yoga goddess pose",
                "Adductor squeeze with ball",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Groin strains (adductor tears) are common in sports with rapid direction change — soccer, hockey, basketball. The adductor longus is most frequently torn. Copenhagen planks are the gold-standard prevention exercise.",
            },
          ],
        },
        {
          term: "Gastrocnemius & Soleus",
          brief:
            "The two calf muscles — one for power and speed, one for endurance and walking.",
          mnemonic:
            "GAS-trocnemius = has a belly (it bulges). SOLeus = SOLe — it works closest to the ground doing the slow, steady walking work. GAS = fast and powerful. SOL = slow and enduring.",
          tabs: [
            {
              label: "Details",
              content:
                "The gastrocnemius is the larger, more superficial calf muscle with two heads that converge into the Achilles tendon. It crosses the knee — meaning it assists in knee flexion and is best trained with the knee straight. The soleus sits beneath it, deeper and shorter, crossing only the ankle. The soleus is dominant during walking and prolonged standing — it's a powerful blood pump returning venous blood from the lower leg back to the heart. Both muscles plantarflex the ankle (pointing the foot).",
            },
            {
              label: "Activates",
              content: [
                "Standing calf raise (gastrocnemius)",
                "Seated calf raise with bent knee (soleus)",
                "Jump rope",
                "Single-leg calf raise",
                "Downward dog",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Achilles tendinopathy affects their shared tendon — the strongest in the body. 'Tennis leg' is an acute gastrocnemius tear: a sudden tearing sensation mid-calf during explosive push-off. Soleus strains tend to be more insidious and slower to heal due to its poor blood supply.",
            },
          ],
        },
      ],
    },
    {
      id: "joints",
      label: "Joints & Connective Tissue",
      subtitle: "How the body connects and transfers force",
      icon: "◇",
      accent: "#8FA888",
      cards: [
        {
          term: "Tendon",
          brief:
            "Dense connective tissue attaching muscle to bone — the force transmitter of the body.",
          mnemonic:
            "TENDon = it TENDS the connection between muscle and bone. Muscle → Tendon → Bone. Tendons are the cables of your body's pulley system.",
          tabs: [
            {
              label: "Details",
              content:
                "Tendons are composed primarily of type I collagen fibers arranged in parallel — an architecture optimized for tensile strength along one axis. They transmit muscular force to the skeleton to create movement. Tendons can store and release elastic energy (like a spring), which is why running and jumping are more efficient than they'd otherwise be. Despite their strength, tendons have a poor blood supply — which is why tendon injuries heal slowly and incompletely.",
            },
            {
              label: "Activates",
              content: [
                "Eccentric loading (slow lowering) is the most evidence-based tendon rehabilitation method",
                "Isometric holds reduce pain acutely",
                "Heavy slow resistance training rebuilds tendon collagen",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Tendinopathy (degeneration) is far more common than tendinitis (inflammation) in chronic tendon pain — the distinction matters because anti-inflammatories don't treat degeneration. Load management and progressive loading are the primary treatment.",
            },
          ],
        },
        {
          term: "Ligament",
          brief:
            "Fibrous connective tissue that connects bone to bone — the joint's passive stabilizer.",
          mnemonic:
            "LIGA-ment = LIGA = to tie (Latin). Ligaments tie bones together. LIG-aments Link bones. They're the body's zip ties — strong but not stretchy.",
          tabs: [
            {
              label: "Details",
              content:
                "Ligaments stabilize joints passively — they cannot contract like muscles. They are richly innervated with mechanoreceptors, making them important for proprioception (joint position sense) in addition to mechanical stability. When a ligament is torn, this sensory function is also disrupted, which is why proprioception retraining is critical in rehabilitation. Ligaments have poor vascularity and regenerate poorly — most significant ligament tears require surgical reconstruction.",
            },
            {
              label: "Activates",
              content: [
                "Balance and proprioception training (balance board, single-leg work) rebuilds ligament sensory function",
                "Strength training around the joint reduces load on ligaments indirectly",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "ACL tears (anterior cruciate ligament of the knee) are among the most devastating sports injuries. The classic mechanism is a non-contact deceleration with the foot planted and the knee collapsing inward — common in soccer, basketball, and skiing.",
            },
          ],
        },
        {
          term: "The Knee Joint",
          brief:
            "The body's largest joint — a modified hinge between the femur, tibia, and patella.",
          mnemonic:
            "Think of the knee as a door hinge that can also slightly rotate. The four ligaments are its hinges — remove one and the whole door wobbles. The menisci are its shock-absorbing door stop.",
          tabs: [
            {
              label: "Details",
              content:
                "The knee primarily flexes and extends, but also permits slight internal and external rotation in flexed positions. It is stabilized by four major ligaments (ACL, PCL, MCL, LCL), two crescent-shaped menisci (fibrocartilaginous shock absorbers), and the patella. The patella acts as a pulley, increasing the mechanical advantage of the quadriceps. The knee is inherently less stable than the hip because it sits between two long levers (femur and tibia) — making force control at the hip and ankle critical for knee health.",
            },
            {
              label: "Activates",
              content: [
                "Terminal knee extension (VMO + joint stability)",
                "Step-down (eccentric quad control)",
                "Single-leg squat (functional stability)",
                "Wall sit (isometric quad + joint health)",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "The 'unhappy triad' — simultaneous tears of the ACL, MCL, and medial meniscus — is the classic contact knee injury in sports. Patellofemoral pain (pain behind the kneecap) is the most prevalent overuse injury in the general population.",
            },
          ],
        },
        {
          term: "The Hip Joint",
          brief:
            "A deep ball-and-socket joint — the most mobile and inherently stable joint in the lower body.",
          mnemonic:
            "ACET-abulum = little cup (Latin: acetum = vinegar cup). The femoral ball sits in the hip's 'cup.' Deep socket = stable. Shallow shoulder socket = mobile but risky.",
          tabs: [
            {
              label: "Details",
              content:
                "The hip is a ball-and-socket joint where the femoral head sits within the deep acetabulum, reinforced by a fibrocartilaginous rim called the labrum. Unlike the shoulder (shallow socket), the hip's depth provides inherent bony stability. The hip moves in all three planes — flexion/extension, abduction/adduction, internal/external rotation — and has more than 20 muscles acting on it. Maintaining full hip mobility is one of the most impactful things a person can do for long-term lower body and back health.",
            },
            {
              label: "Activates",
              content: [
                "90/90 hip stretch",
                "Hip CARs (controlled articular rotations)",
                "Pigeon pose (external rotation)",
                "Hip flexor stretch (extension)",
                "Hip airplane (rotational control)",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Femoroacetabular impingement (FAI) occurs when the ball and socket pinch, often during deep squat or flexion. Hip labrum tears commonly accompany impingement. Both are increasingly diagnosed in active people and desk workers with limited hip mobility.",
            },
          ],
        },
        {
          term: "Fascia",
          brief:
            "A continuous body-wide web of connective tissue that surrounds and connects everything.",
          mnemonic:
            "FASCIA = FASCIAating. When you learn about fascia, you're fascinated — it connects everything in ways you didn't expect. Tension anywhere ripples everywhere.",
          tabs: [
            {
              label: "Details",
              content:
                "Fascia is a three-dimensional continuous network of collagen and elastin that surrounds every muscle fiber, muscle, organ, nerve, and blood vessel. It transmits mechanical tension across the entire body — meaning tightness in the plantar fascia of the foot can influence the hamstrings, lumbar spine, and even neck. The concept of 'myofascial lines' (popularized by Thomas Myers' Anatomy Trains) describes these tension pathways. Fascia is highly innervated and plays a role in proprioception and interoception.",
            },
            {
              label: "Activates",
              content: [
                "Foam rolling (myofascial release — compresses and shears fascia)",
                "Slow dynamic stretching (loads the fascial system)",
                "Yoga (whole-body fascial integration)",
                "Breathwork (the diaphragm is a fascial structure)",
              ],
            },
            {
              label: "Injury Risk",
              content:
                "Plantar fasciitis is inflammation of the plantar fascia on the sole — one of the most common foot conditions. IT band syndrome involves the lateral thigh fascia. Both respond better to load management and strengthening than to passive stretching alone.",
            },
          ],
        },
      ],
    },
  ],
};

export default bodyInMotion;
