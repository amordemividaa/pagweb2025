import turtle
from flask import Flask, render_template

app = Flask(__name__)

# Creating simple Routes 
@app.route('/test')
def test():
    return "Home Page"

# Routes to Render Something
@app.route('/')
def home():
    return render_template("rosa.html")

# Make sure this we are executing this file
if __name__ == '__main__':
    app.run(debug=True)

t = turtle.Turtle()
t.pensize(5)

turtle.bgcolor("black")

def go(x,y):
    t.penup()
    t.goto(x,y)
    t.pendown()

t.pencolor("#008000")
t.fillcolor("#00FF00")

go(0, -250)
t.seth(90)

t.begin_fill()
t.circle(200, 70)
t.circle(-200, 45)
t.seth(270)
t.circle(298, 80)
t.end_fill()

go(0, -250)

t.begin_fill()
t.seth(90)
t.circle(-200, 70)
t.circle(200, 45)
t.seth(270)
t.circle(-298, 80)
t.end_fill()

go(-10, -190)

t.begin_fill()
t.seth(90)
t.circle(-10, 70)
t.seth(0)
t.goto(10, 70)
t.seth(270)
t.goto(10, -190)
t.goto(0, -225)
t.goto(-10, -190)
t.end_fill()

t.pencolor("#Ff0000")
t.fillcolor("#d35d56")

t.seth(90)
go(-80, 270)
t.begin_fill()
t.circle(-120, 45)
t.seth(320)
t.circle(-120, 45)
t.end_fill()

t.seth(98)
go(-6, 270)
t.begin_fill()
t.circle(-120, 45)
t.seth(320)
t.circle(-120, 45)
t.end_fill()

t.seth(90)
go(-45, 270)
t.begin_fill()
t.circle(-120, 45)
t.seth(320)
t.circle(-120, 45)
t.goto(30, 220)
t.end_fill()

t.seth(0)
go(-10, 70)
t.begin_fill()
t.goto(15, 70)
t.circle(71, 80)
t.seth(80)
t.circle(400, 33)
t.seth(225)
t.circle(300, 25)
t.end_fill()

t.seth(0)
go(-10, 70)
t.begin_fill()
t.circle(20, 40)
t.circle(60, 50)
t.seth(90)
t.circle(300, 50)
t.seth(250)
t.circle(400, 33)
t.circle(71, 90)
t.end_fill()

t.hideturtle()
