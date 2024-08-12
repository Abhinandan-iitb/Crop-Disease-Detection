import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export const diseaseDetails = {
  "Apple___Apple_scab": {
      "description": "Apple Scab is a fungal disease that causes dark, sunken lesions on apple leaves, fruit, and stems. The lesions may appear as olive-green to black and can lead to premature leaf drop and fruit deformities.",
      "cause": "The disease is caused by the fungus Venturia inaequalis.",
      "precaution": "Remove and destroy infected plant parts to reduce spore sources. Use apple varieties resistant to scab and apply fungicides during the growing season.",
      "medicine": "Apply fungicides such as chlorothalonil or myclobutanil. Follow the manufacturer’s instructions for the correct dosage and application intervals."
  },
  "Apple___Black_rot": {
      "description": "Black Rot leads to dark, dry, and sunken lesions on apples, which can result in fruit decay. The disease affects both the fruit and leaves, making the apples unmarketable.",
      "cause": "Caused by the fungus Botryosphaeria obtusa.",
      "precaution": "Prune and remove infected branches and fruit. Use resistant apple varieties and apply fungicides to protect the plant.",
      "medicine": "Use fungicides such as copper hydroxide or sulfur. Follow label instructions for the appropriate dose and application timing."
  },
  "Apple___Cedar_apple_rust": {
      "description": "Cedar Apple Rust is characterized by bright orange, gelatinous growths on apple fruit and leaves, with yellow spots on the upper side of leaves.",
      "cause": "This disease is caused by the fungus Gymnosporangium juniper-virginianae.",
      "precaution": "Remove cedar trees near apple orchards to reduce the spore source. Use apple varieties resistant to rust and apply fungicides as needed.",
      "medicine": "Apply fungicides like mancozeb or thiophanate-methyl according to the label instructions for dosage and timing."
  },
  "Apple___healthy": {
      "description": "No visible signs of disease. The apple tree is healthy and shows no symptoms of infection.",
      "cause": "N/A",
      "precaution": "Maintain good agricultural practices and monitor for any signs of disease.",
      "medicine": "N/A"
  },
  "Blueberry___healthy": {
      "description": "No visible signs of disease. The blueberry plant is healthy and free from any symptoms of infection.",
      "cause": "N/A",
      "precaution": "Follow standard care and maintenance practices to keep the plant healthy.",
      "medicine": "N/A"
  },
  "Cherry_(including_sour)___Powdery_mildew": {
      "description": "Powdery Mildew appears as a white, powdery fungal growth on cherry leaves, stems, and fruit. It can lead to reduced fruit quality and plant vigor.",
      "cause": "Caused by the fungus Podosphaera clandestina.",
      "precaution": "Improve air circulation around the plant, prune infected parts, and apply fungicides.",
      "medicine": "Use fungicides such as sulfur or potassium bicarbonate, following the product’s application guidelines."
  },
  "Cherry_(including_sour)___healthy": {
      "description": "No visible signs of disease. The cherry tree is in good health and shows no symptoms.",
      "cause": "N/A",
      "precaution": "Maintain healthy growing conditions and perform regular inspections.",
      "medicine": "N/A"
  },
  "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": {
      "description": "Causes gray to brown spots with dark borders on corn leaves. The lesions can cause premature leaf drop and reduce yield.",
      "cause": "Caused by fungi Cercospora zeae-maydis and Helminthosporium maydis.",
      "precaution": "Use corn varieties resistant to the disease and manage crop residue to reduce spore sources.",
      "medicine": "Apply fungicides such as chlorothalonil according to label instructions for dosage and frequency."
  },
  "Corn_(maize)___Common_rust_": {
      "description": "Common Rust causes reddish-brown pustules on corn leaves, which can reduce photosynthesis and affect yield.",
      "cause": "Caused by the fungus Puccinia sorghi.",
      "precaution": "Plant resistant corn varieties and rotate crops to minimize disease pressure.",
      "medicine": "Use fungicides such as propiconazole, following the label for the correct dosage and application timing."
  },
  "Corn_(maize)___Northern_Leaf_Blight": {
      "description": "Northern Leaf Blight causes long, elliptical lesions with a grayish center on corn leaves, leading to premature leaf death and reduced yield.",
      "cause": "Caused by the fungus Exserohilum turcicum.",
      "precaution": "Use resistant corn hybrids and avoid excessive nitrogen fertilization to reduce disease risk.",
      "medicine": "Apply fungicides like tebucanozole according to label instructions for the correct dosage and application schedule."
  },
  "Corn_(maize)___healthy": {
      "description": "No visible signs of disease. The corn plant is healthy and shows no symptoms of infection.",
      "cause": "N/A",
      "precaution": "Maintain good field management practices and monitor for potential diseases.",
      "medicine": "N/A"
  },
  "Grape___Black_rot": {
      "description": "Black Rot causes dark, sunken lesions on grape fruit and leaves, leading to fruit decay and reduced quality.",
      "cause": "Caused by the fungus Guignardia bidwellii.",
      "precaution": "Prune and remove infected plant parts. Apply fungicides to protect healthy tissues.",
      "medicine": "Use fungicides like myclobutanil; follow the label instructions for dosage and application."
  },
  "Grape___Esca_(Black_Measles)": {
      "description": "Esca causes a range of symptoms including leaf spots, wood necrosis, and reduced vine vigor. The disease can lead to premature grapevine death.",
      "cause": "Caused by Phaeoacremonium and Phaeomoniella fungi.",
      "precaution": "Use resistant grape varieties and maintain vine health to reduce the incidence of Esca.",
      "medicine": "Apply fungicides such as copper oxychloride according to label instructions for dosage and application timing."
  },
  "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": {
      "description": "Leaf Blight causes brown lesions on grape leaves, leading to premature leaf drop and reduced vine health.",
      "cause": "Caused by the fungus Isariopsis griseola.",
      "precaution": "Improve air circulation around vines, remove infected plant parts, and apply fungicides.",
      "medicine": "Use fungicides like mancozeb; follow the label for the correct dosage and application schedule."
  },
  "Grape___healthy": {
      "description": "No visible signs of disease. The grapevine is in good health with no symptoms.",
      "cause": "N/A",
      "precaution": "Follow standard vineyard management practices and monitor for diseases.",
      "medicine": "N/A"
  },
  "Orange___Haunglongbing_(Citrus_greening)": {
      "description": "Haunglongbing (HLB) causes yellowing of leaves, fruit drop, and malformed fruit. The disease severely affects fruit quality and can lead to tree decline.",
      "cause": "Caused by Candidatus Liberibacter bacteria, transmitted by citrus psyllids.",
      "precaution": "Remove infected trees, control psyllid populations, and use resistant varieties if available.",
      "medicine": "No effective treatment for HLB; focus on controlling the vector and removing infected plants."
  },
  "Peach___Bacterial_spot": {
      "description": "Bacterial Spot causes dark, sunken lesions on peach leaves and fruit. It can lead to reduced fruit quality and yield.",
      "cause": "Caused by the bacterium Xanthomonas campestris.",
      "precaution": "Prune infected branches, and apply bactericides to protect healthy parts of the plant.",
      "medicine": "Use copper-based bactericides; follow the manufacturer’s guidelines for dosage and application."
  },
  "Peach___healthy": {
      "description": "No visible signs of disease. The peach tree is healthy and shows no symptoms.",
      "cause": "N/A",
      "precaution": "Maintain regular care and monitoring.",
      "medicine": "N/A"
  },
  "Pepper,_bell___Bacterial_spot": {
      "description": "Bacterial Spot causes dark, water-soaked spots on pepper leaves and fruit. It can lead to reduced fruit quality and plant health.",
      "cause": "Caused by the bacterium Xanthomonas campestris.",
      "precaution": "Remove infected plants, use resistant varieties, and apply bactericides as needed.",
      "medicine": "Apply copper-based bactericides; follow product directions for dosage and application."
  },
  "Pepper,_bell___healthy": {
      "description": "No visible signs of disease. The bell pepper plant is in good health.",
      "cause": "N/A",
      "precaution": "Follow good agricultural practices and monitor for any signs of disease.",
      "medicine": "N/A"
  },
  "Potato___Early_blight": {
      "description": "Early Blight causes dark, concentric ring lesions on potato leaves, leading to reduced plant health and tuber quality.",
      "cause": "Caused by the fungus Alternaria solani.",
      "precaution": "Apply fungicides and practice crop rotation to manage the disease.",
      "medicine": "Use fungicides like chlorothalonil according to label instructions for dosage and application."
  },
  "Potato___Late_blight": {
      "description": "Late Blight causes large, irregular lesions with a white mold on the underside of potato leaves. It can result in rapid plant death and tuber rot.",
      "cause": "Caused by the fungus Phytophthora infestans.",
      "precaution": "Apply fungicides regularly and remove infected plants to control the spread.",
      "medicine": "Use fungicides such as metalaxyl; follow the product’s guidelines for dosage and timing."
  },
  "Potato___healthy": {
      "description": "No visible signs of disease. The potato plants are healthy and show no symptoms.",
      "cause": "N/A",
      "precaution": "Maintain good field practices and monitor for potential diseases.",
      "medicine": "N/A"
  },
  "Raspberry___healthy": {
      "description": "No visible signs of disease. The raspberry plant is healthy and shows no symptoms of infection.",
      "cause": "N/A",
      "precaution": "Regular maintenance and monitoring are essential.",
      "medicine": "N/A"
  },
  "Soybean___healthy": {
      "description": "No visible signs of disease. The soybean plants are healthy and free from symptoms.",
      "cause": "N/A",
      "precaution": "Follow standard agricultural practices and check regularly for signs of disease.",
      "medicine": "N/A"
  },
  "Squash___Powdery_mildew": {
      "description": "Powdery Mildew appears as a white, powdery fungal growth on squash leaves, stems, and fruit. It can lead to reduced plant vigor and yield.",
      "cause": "Caused by the fungus Sphaerotheca fuliginea.",
      "precaution": "Improve air circulation around plants and apply fungicides to control the disease.",
      "medicine": "Use fungicides such as sulfur or potassium bicarbonate; follow the label instructions for correct dosage and application."
  },
  "Strawberry___Leaf_scorch": {
      "description": "Leaf Scorch causes the edges of strawberry leaves to turn brown and dry out, often due to environmental stress or fungal infections.",
      "cause": "Can be caused by environmental factors or fungal pathogens.",
      "precaution": "Ensure proper irrigation to avoid stress, and use mulch to retain soil moisture.",
      "medicine": "Use fungicides if a fungal pathogen is present; otherwise, focus on irrigation and care practices."
  },
  "Strawberry___healthy": {
      "description": "No visible signs of disease. The strawberry plant is in good health.",
      "cause": "N/A",
      "precaution": "Maintain regular care and field management.",
      "medicine": "N/A"
  },
  "Tomato___Bacterial_spot": {
      "description": "Bacterial Spot causes dark, water-soaked spots on tomato leaves and fruit. It can lead to reduced quality and yield.",
      "cause": "Caused by the bacterium Xanthomonas campestris.",
      "precaution": "Remove infected plants and use resistant varieties. Apply bactericides as necessary.",
      "medicine": "Apply copper-based bactericides; follow label directions for dosage and frequency."
  },
  "Tomato___Early_blight": {
      "description": "Early Blight causes dark, concentric ring lesions on tomato leaves and fruit. It can lead to reduced plant health and fruit quality.",
      "cause": "Caused by the fungus Alternaria solani.",
      "precaution": "Apply fungicides and practice crop rotation to manage the disease.",
      "medicine": "Use fungicides like chlorothalonil according to the label instructions for dosage and application."
  },
  "Tomato___Late_blight": {
      "description": "Late Blight causes large, irregular lesions with white mold on the underside of tomato leaves. It can cause rapid plant death and fruit decay.",
      "cause": "Caused by the fungus Phytophthora infestans.",
      "precaution": "Apply fungicides regularly and remove infected plants to prevent spread.",
      "medicine": "Use fungicides such as metalaxyl; follow product instructions for dosage and application."
  },
  "Tomato___Leaf_Mold": {
      "description": "Leaf Mold causes yellowing and mold growth on the underside of tomato leaves, affecting plant health and fruit quality.",
      "cause": "Caused by the fungus Cladosporium fulvum.",
      "precaution": "Improve air circulation and apply fungicides to control the disease.",
      "medicine": "Use fungicides like chlorothalonil; follow label instructions for dosage and timing."
  },
  "Tomato___Septoria_leaf_spot": {
      "description": "Septoria Leaf Spot causes small, dark spots with gray centers on tomato leaves. It can lead to early leaf drop and reduced plant health.",
      "cause": "Caused by the fungus Septoria lycopersici.",
      "precaution": "Apply fungicides and remove infected leaves to manage the disease.",
      "medicine": "Use fungicides such as copper-based products; follow product guidelines for dosage and application."
  },
  "Tomato___Spider_mites Two-spotted_spider_mite": {
      "description": "Spider Mites cause stippling and webbing on tomato leaves, leading to reduced plant vigor and yield.",
      "cause": "Caused by Tetranychus urticae.",
      "precaution": "Use miticides and ensure plants are well-watered to reduce mite stress.",
      "medicine": "Use miticides like abamectin; follow label instructions for dosage and application."
  },
  "Tomato___Target_Spot": {
      "description": "Target Spot causes circular, dark spots with concentric rings on tomato leaves, which can reduce plant health and yield.",
      "cause": "Caused by the fungus Corynespora cassiicola.",
      "precaution": "Apply fungicides and practice good field hygiene to manage the disease.",
      "medicine": "Use fungicides such as chlorothalonil; follow the product’s guidelines for dosage and timing."
  },
  "Tomato___Tomato_Yellow_Leaf_Curl_Virus": {
      "description": "Tomato Yellow Leaf Curl Virus causes yellowing and curling of tomato leaves, which can lead to reduced fruit production.",
      "cause": "Caused by the Tomato yellow leaf curl virus, transmitted by whiteflies.",
      "precaution": "Use resistant varieties and control vector insects to manage the virus.",
      "medicine": "No chemical treatments available; focus on vector control and resistant varieties."
  },
  "Tomato___Tomato_mosaic_virus": {
      "description": "Tomato Mosaic Virus causes mottling and distortion of tomato leaves and fruit, leading to reduced quality and yield.",
      "cause": "Caused by the Tomato mosaic virus.",
      "precaution": "Use resistant varieties and avoid using contaminated tools and equipment.",
      "medicine": "No chemical treatments available; prevention through sanitation and resistant varieties is key."
  },
  "Tomato___healthy": {
      "description": "No visible signs of disease. The tomato plant is healthy and shows no symptoms.",
      "cause": "N/A",
      "precaution": "Maintain good field management practices and monitor for diseases regularly.",
      "medicine": "N/A"
  }
}
