from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///alarms.db'
db = SQLAlchemy(app)

class Alarm(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.String(5), nullable=False)
    sound = db.Column(db.String(20), nullable=False)
    active = db.Column(db.Boolean, default=True)

with app.app_context():
    db.create_all()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/save-alarms', methods=['POST'])
def save_alarms():
    data = request.json
    alarms = data.get('alarms', [])
    
    # Clear existing alarms
    Alarm.query.delete()
    
    # Save new alarms
    for alarm in alarms:
        new_alarm = Alarm(
            time=alarm['time'],
            sound=alarm['sound'],
            active=alarm['active']
        )
        db.session.add(new_alarm)
    
    db.session.commit()
    return jsonify({"status": "success"})

if __name__ == '__main__':
    app.run(debug=True)
