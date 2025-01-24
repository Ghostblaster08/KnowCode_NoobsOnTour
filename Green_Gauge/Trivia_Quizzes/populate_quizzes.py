import os
import django
import sys
sys.path.append(r"C:\Users\Aadi\Desktop\Knowcode\KnowCode_NoobsOnTour\Green_Gauge")


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Green_Gauge.settings")

django.setup()

from Trivia_Quizzes.models import Quiz, Question, Answer

# List of questions and answers
questions_and_answers = [
    {
        "question": "What is the most abundant gas in Earth's atmosphere?",
        "answers": [("Nitrogen", True), ("Oxygen", False), ("Carbon Dioxide", False), ("Argon", False)],
    },
    {
        "question": "Which renewable energy source is derived from the Earth's heat?",
        "answers": [("Solar", False), ("Geothermal", True), ("Hydropower", False), ("Wind", False)],
    },
    {
        "question": "What percentage of the Earth's surface is covered by water?",
        "answers": [("50%", False), ("71%", True), ("85%", False), ("65%", False)],
    },
    {
        "question": "Which greenhouse gas is the most potent in trapping heat?",
        "answers": [("Methane", True), ("Carbon Dioxide", False), ("Oxygen", False), ("Nitrous Oxide", False)],
    },
    {
        "question": "What is the main cause of global warming?",
        "answers": [("Deforestation", False), ("Greenhouse gases", True), ("Volcanic eruptions", False), ("Solar radiation", False)],
    },
    {
        "question": "Which country emits the most carbon dioxide overall?",
        "answers": [("United States", False), ("China", True), ("India", False), ("Russia", False)],
    },
    {
        "question": "What is the main purpose of the Paris Agreement?",
        "answers": [("Reduce nuclear weapons", False), ("Combat climate change", True), ("Ban single-use plastics", False), ("Increase biodiversity", False)],
    },
    {
        "question": "Which energy source is non-renewable?",
        "answers": [("Solar", False), ("Coal", True), ("Wind", False), ("Hydropower", False)],
    },
    {
        "question": "Which layer of the Earth contains the ozone layer?",
        "answers": [("Troposphere", False), ("Stratosphere", True), ("Mesosphere", False), ("Thermosphere", False)],
    },
    {
        "question": "What is the primary cause of ocean acidification?",
        "answers": [("Oil spills", False), ("Excess CO2 absorption", True), ("Overfishing", False), ("Plastic pollution", False)],
    },
    {
        "question": "Which of the following animals is considered an indicator of a healthy ecosystem?",
        "answers": [("Polar bears", False), ("Frogs", True), ("Crows", False), ("Sharks", False)],
    },
    {
        "question": "What is the term for species at risk of extinction?",
        "answers": [("Extinct", False), ("Endangered", True), ("Invasive", False), ("Vulnerable", False)],
    },
    {
        "question": "Which of these practices helps reduce carbon footprint?",
        "answers": [("Using public transportation", True), ("Burning fossil fuels", False), ("Overfishing", False), ("Deforestation", False)],
    },
    {
        "question": "Which of these is a greenhouse gas?",
        "answers": [("Nitrogen", False), ("Water vapor", True), ("Oxygen", False), ("Argon", False)],
    },
    {
        "question": "What is the process by which plants convert sunlight into energy?",
        "answers": [("Respiration", False), ("Photosynthesis", True), ("Evaporation", False), ("Condensation", False)],
    },
    {
        "question": "What is the main source of energy for life on Earth?",
        "answers": [("Nuclear energy", False), ("Solar energy", True), ("Geothermal energy", False), ("Wind energy", False)],
    },
    {
        "question": "Which of these materials is biodegradable?",
        "answers": [("Plastic", False), ("Paper", True), ("Glass", False), ("Metal", False)],
    },
    {
        "question": "What is the largest source of freshwater on Earth?",
        "answers": [("Lakes", False), ("Glaciers", True), ("Rivers", False), ("Underground water", False)],
    },
    {
        "question": "Which country produces the most solar energy?",
        "answers": [("India", False), ("China", True), ("United States", False), ("Germany", False)],
    },
    {
        "question": "What does the term 'biodiversity' refer to?",
        "answers": [("Variety of ecosystems", False), ("Variety of life forms", True), ("Variety of plants only", False), ("Number of species", False)],
    },
    {
        "question": "What is the process of planting trees to restore forests called?",
        "answers": [("Deforestation", False), ("Afforestation", True), ("Degradation", False), ("Reclamation", False)],
    },
    {
        "question": "What is the main component of smog?",
        "answers": [("Water vapor", False), ("Ozone", True), ("Methane", False), ("Nitrogen", False)],
    },
    {
        "question": "What is the term for species not native to a specific area?",
        "answers": [("Endangered", False), ("Invasive", True), ("Vulnerable", False), ("Extinct", False)],
    },
    {
        "question": "What is the term for water that falls from clouds?",
        "answers": [("Condensation", False), ("Precipitation", True), ("Evaporation", False), ("Transpiration", False)],
    },
    {
        "question": "Which of these is a renewable energy source?",
        "answers": [("Coal", False), ("Wind", True), ("Natural gas", False), ("Oil", False)],
    },
    {
        "question": "What is the primary source of plastic pollution in the ocean?",
        "answers": [("Industrial waste", False), ("Single-use plastics", True), ("Fishing equipment", False), ("Microplastics", False)],
    },
    {
        "question": "What is the main benefit of wetlands?",
        "answers": [("Reduce water pollution", False), ("Flood control", True), ("Source of coal", False), ("Increase erosion", False)],
    },
    {
        "question": "Which of these ecosystems has the highest biodiversity?",
        "answers": [("Tundra", False), ("Tropical rainforest", True), ("Desert", False), ("Savanna", False)],
    },
    {
        "question": "What is a carbon footprint?",
        "answers": [("The size of carbon deposits", False), ("The amount of CO2 emissions produced", True), ("The percentage of carbon in soil", False), ("Carbon found in fossil fuels", False)],
    },
]

def populate_quizzes():
    # Create a quiz
    quiz = Quiz.objects.create(
        title="Environmental Quiz",
        description="A quiz to test your knowledge about the environment!"
    )

    # Add questions and answers to the quiz
    for qa in questions_and_answers:
        question = Question.objects.create(text=qa["question"], quiz=quiz)
        for answer_text, is_correct in qa["answers"]:
            Answer.objects.create(text=answer_text, is_correct=is_correct, question=question)

    print("Quiz populated successfully!")


# Execute the script
if __name__ == "__main__":
    populate_quizzes()
