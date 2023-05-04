from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('remover/<id>', views.excluir, name='excluir'),

]
