🏨 Hotel Recommendation System

A hybrid hotel recommendation engine using text analysis, machine learning,
and deep learning models to suggest the most suitable hotels based on user preferences, hotel reviews, room attributes, and pricing.

💡 Features
🛏️ Recommends hotels based on:

Room attributes

Hotel reviews

Pricing patterns

🧠 Machine Learning Models Used:

Random Forest

Decision Tree

SVM

XGBoost

MLPClassifier (Neural Network)

🧾 NLP Techniques:

Tokenization

Stopword Removal

TF-IDF & Count Vectorization

Cosine Similarity for matching

📊 Visualizations:

Seaborn plots for EDA

🧬 Deep Learning Support (LSTM via Keras)

🛠️ Tech Stack

Python

pandas, numpy, matplotlib, seaborn

scikit-learn

xgboost

tensorflow / keras

nltk

📂 Dataset Files Used

Hotel_details.csv — Hotel general info

Hotel_Room_attributes.csv — Room features (bed, AC, Wi-Fi, etc.)

hotels_RoomPrice.csv — Pricing info per hotel

Make sure to update file paths in the script as needed.

📁 File Structure

├── Hotel Reccomendation.py         # Main script for model training and testing

├── Hotel_details.csv               # Dataset file 1

├── Hotel_Room_attributes.csv       # Dataset file 2

├── hotels_RoomPrice.csv            # Dataset file 3

└── README.md
▶️ How to Run
1. Install Required Libraries

pip install numpy pandas matplotlib seaborn scikit-learn xgboost nltk tensorflow
2. Download NLTK Data (First Time Only)

import nltk
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')
3. Run the Script

python "Hotel Reccomendation.py"
🧠 Algorithms Used

Model	Purpose
RandomForest	Feature importance + classification
DecisionTree	Basic decision rule-based model
XGBoost	High-performing gradient boosting
SVM	Text classification
MLPClassifier	Deep learning-based recommendation
LSTM (Keras)	Optional deep sequence processing
📝 Example Use Cases

A travel platform recommending hotels based on user preferences

Smart filtering using pricing + feature combination

Text review analysis to improve recommendations

👤 Author

Master Prince
