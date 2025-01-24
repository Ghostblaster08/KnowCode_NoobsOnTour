# Trivia_Quizzes/views.py

from django.shortcuts import render, redirect
from .models import Quiz, Question, Answer
from django.http import HttpResponse

# View to display quiz questions
def quiz_view(request):
    quiz = Quiz.objects.all()[1]  # Get the first quiz (you can modify this)
    questions = quiz.questions.all()[:5]  # Get the first 5 questions
    if request.method == "POST":
        score = 0
        for question in questions:
            selected_answer = request.POST.get(str(question.id))  # Get the selected answer id
            correct_answer = question.answers.filter(is_correct=True).first()
            if selected_answer == str(correct_answer.id):
                score += 1
        return render(request, 'quiz_result.html', {'score': score, 'total': len(questions)})

    return render(request, 'quiz.html', {'quiz': quiz, 'questions': questions})

