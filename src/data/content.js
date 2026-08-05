/**
 * CENTRALIZED PORTFOLIO CONTENT DATA FILE
 * Easily update personal details, skills, education, and project repositories here.
 */

export const contentData = {
  personal: {
    name: "Abid Ali Mohd Yusuf Shaikh",
    displayName: "Abid Ali Shaikh",
    shortName: "ABID ALI",
    title: "Aspiring AI & Machine Learning Engineer",
    tagline: "AI / MACHINE LEARNING • COMPUTER VISION / DATA",
    heroStatement: "Final-year AI/ML student building practical systems that see, learn, and interact.",
    bio: "Final-year Diploma student in Artificial Intelligence & Machine Learning at Theem College of Engineering. Specialized in Computer Vision, Real-Time Gesture Tracking, Model Optimization, and Data Analytics. Hands-on experience developing 8 practical AI applications using OpenCV, MediaPipe, and TensorFlow.",
    location: "Maharashtra, India",
    email: "abidalishaikh2007@gmail.com",
    phone: "9225516696",
    github: "https://github.com/abidcore",
    linkedin: "https://www.linkedin.com/in/abid-ali-shaikh-03a591423",
    resumePath: "./resume/Abid-Ali-Resume.pdf",
    profileImagePath: "./images/profile.jpg",
    status: "Available for AI/ML Internships & Roles"
  },

  languages: ["English", "Hindi"],

  careerInterests: [
    "AI/ML",
    "Computer Vision",
    "Data Science",
    "Data Analytics",
    "Software / Technology"
  ],

  metrics: [
    { value: "08", label: "AI/ML Repositories" },
    { value: "75%+", label: "Academic Aggregate" },
    { value: "2027", label: "Graduation Year" },
    { value: "Vision", label: "Core Specialization" }
  ],

  skills: {
    programming: ["Python", "Java", "C", "C++", "HTML", "CSS"],
    dataAndDb: ["SQL", "Database Fundamentals", "Data Analytics Basics", "NumPy", "Pandas"],
    aiAndMl: ["Machine Learning", "Artificial Intelligence", "Computer Vision", "Generative AI", "Agentic AI"],
    toolsAndFrameworks: ["OpenCV", "MediaPipe", "TensorFlow Basics", "Git", "GitHub", "VS Code"]
  },

  education: [
    {
      institution: "Theem College of Engineering",
      location: "Maharashtra, India",
      qualification: "Diploma in Artificial Intelligence & Machine Learning",
      status: "Final Year (5th Semester)",
      expectedCompletion: "2027",
      score: "Current Aggregate: ~75–76%",
      details: "Comprehensive coursework in AI Algorithms, Machine Learning Principles, Computer Vision, Data Structures, DBMS, and Python Software Development."
    },
    {
      institution: "M.B.J. English Medium High School",
      location: "Maharashtra, India",
      qualification: "Secondary School Certificate (SSC)",
      status: "Completed",
      score: "SSC Percentage: 78.40%",
      details: "Foundational academic training in mathematics, physical sciences, and computer applications."
    }
  ],

  internship: {
    organization: "IOFT",
    role: "Technical Trainee",
    status: "Completed Training",
    description: "Completed technical training gaining hands-on exposure to modern software development practices, AI workflows, and practical project execution."
  },

  featuredProjects: [
    {
      id: "01",
      number: "PROJECT // 01",
      title: "Virtual Mouse Control",
      category: "Computer Vision / Real-Time HCI",
      technologies: ["Python", "OpenCV", "MediaPipe"],
      github: "https://github.com/abidcore/Virtual-Mouse-Control",
      description: "Engineered a real-time computer vision system enabling complete mouse cursor control through hand gesture tracking. Landmarks are extracted at high FPS to map finger coordinates directly to cursor positioning, clicking, and dragging without physical hardware.",
      highlights: [
        "Real-time 21-point hand landmark estimation via MediaPipe",
        "Spatial gesture smoothing algorithm reducing cursor jitter",
        "Hardware-free touchless interaction model"
      ],
      visualType: "code",
      codeSnippet: `import cv2, mediapipe as mp
hands = mp.solutions.hands.Hands(max_num_hands=1)
while cap.isOpened():
    ret, frame = cap.read()
    results = hands.process(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
    # Map index finger landmark to screen coordinates`
    },
    {
      id: "02",
      number: "PROJECT // 02",
      title: "AI Face Attendance System",
      category: "Computer Vision / Biometric Vision",
      technologies: ["Python", "OpenCV", "Face Recognition"],
      github: "https://github.com/abidcore/AI-Face-Attendance-System",
      description: "Built an automated facial recognition attendance management solution. Capable of detecting faces in real-time video streams, encoding 128-dimensional facial embeddings, and automatically logging timestamped attendance records.",
      highlights: [
        "High-accuracy facial vector extraction & distance matching",
        "Automated database logging with date, time, and identity verification",
        "Eliminates proxy attendance and manual administrative overhead"
      ],
      visualType: "matrix",
      codeSnippet: `import face_recognition, cv2
encodings = face_recognition.face_encodings(rgb_frame)
for encoding in encodings:
    matches = face_recognition.compare_faces(known_faces, encoding)
    if True in matches: mark_attendance(matched_name)`
    },
    {
      id: "03",
      number: "PROJECT // 03",
      title: "AI Face Mask Detection",
      category: "Deep Learning / Convolutional Neural Networks",
      technologies: ["Python", "OpenCV", "TensorFlow"],
      github: "https://github.com/abidcore/AI-Face-Mask-Detection",
      description: "Developed a deep learning classification pipeline that monitors video feeds in real-time to detect whether individuals are wearing face masks correctly, improperly, or not at all.",
      highlights: [
        "Convolutional Neural Network (CNN) trained on facial datasets",
        "Robust inference under diverse lighting conditions and camera angles",
        "Instant visual bounding-box feedback with status overlays"
      ],
      visualType: "neural",
      codeSnippet: `from tensorflow.keras.models import load_model
model = load_model("mask_detector.h5")
preds = model.predict(face_array)
label = "Mask" if preds[0][0] > 0.5 else "No Mask"`
    }
  ],

  projectLedger: [
    {
      id: "04",
      number: "04",
      title: "Virtual Volume Control",
      category: "Human-Computer Interaction (HCI)",
      technologies: ["Python", "OpenCV", "MediaPipe"],
      github: "https://github.com/abidcore/Virtual-Volume-Control",
      description: "Calculates thumb-to-index fingertip Euclidean distance in real-time to dynamically adjust operating system master audio levels."
    },
    {
      id: "05",
      number: "05",
      title: "Virtual Brightness Control",
      category: "Computer Vision Utility",
      technologies: ["Python", "OpenCV", "MediaPipe"],
      github: "https://github.com/abidcore/Virtual-Brightness-Control",
      description: "Uses hand gesture distance metrics to map physical hand elevation directly to screen backlight brightness adjustment."
    },
    {
      id: "06",
      number: "06",
      title: "Finger Counter",
      category: "Gesture Recognition",
      technologies: ["Python", "OpenCV", "MediaPipe"],
      github: "https://github.com/abidcore/Finger-Counter",
      description: "High-accuracy finger counting vision system capable of identifying extended digits and translating hand states into numeric counts."
    },
    {
      id: "07",
      number: "07",
      title: "AI Rock Paper Scissors",
      category: "Interactive Vision & Game AI",
      technologies: ["Python", "OpenCV", "MediaPipe"],
      github: "https://github.com/abidcore/AI-Rock-Paper-Scissors",
      description: "Interactive hand-gesture game engine that classifies user hand gestures live from webcam feeds and matches them against an automated AI competitor."
    },
    {
      id: "08",
      number: "08",
      title: "AI Drowsiness Detection System",
      category: "Computer Vision & Driver Safety AI",
      technologies: ["Python", "OpenCV", "MediaPipe"],
      description: "Monitors driver eye movements and facial landmark changes to calculate Eye Aspect Ratio (EAR), triggering real-time drowsiness alerts to prevent accidents."
    }
  ]
};
