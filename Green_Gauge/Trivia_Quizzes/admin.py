from django.contrib import admin

# Register your models here.
from .models import Quiz, Question, Answer

class AnswerInline(admin.TabularInline):
    model = Answer
    extra = 3

class QuestionAdmin(admin.ModelAdmin):
    inlines = [AnswerInline]

class QuizAdmin(admin.ModelAdmin):
    pass

admin.site.register(Quiz, QuizAdmin)
admin.site.register(Question, QuestionAdmin)
