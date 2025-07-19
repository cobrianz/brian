import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CalendarIntegration = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const timeSlots = [
    { time: '9:00 AM', available: true, timezone: 'EAT' },
    { time: '10:30 AM', available: true, timezone: 'EAT' },
    { time: '12:00 PM', available: false, timezone: 'EAT' },
    { time: '2:00 PM', available: true, timezone: 'EAT' },
    { time: '3:30 PM', available: true, timezone: 'EAT' },
    { time: '5:00 PM', available: false, timezone: 'EAT' }
  ];

  const meetingTypes = [
    {
      type: 'consultation',
      title: 'Free Consultation',
      duration: '30 minutes',
      description: 'Discuss your project requirements and get initial advice',
      icon: 'MessageCircle',
      color: 'text-primary'
    },
    {
      type: 'technical',
      title: 'Technical Discussion',
      duration: '45 minutes',
      description: 'Deep dive into technical requirements and architecture',
      icon: 'Code',
      color: 'text-success'
    },
    {
      type: 'project',
      title: 'Project Planning',
      duration: '60 minutes',
      description: 'Comprehensive project planning and timeline discussion',
      icon: 'Calendar',
      color: 'text-warning'
    }
  ];

  const availableDates = [
    { date: '2025-01-20', day: 'Mon', available: true },
    { date: '2025-01-21', day: 'Tue', available: true },
    { date: '2025-01-22', day: 'Wed', available: false },
    { date: '2025-01-23', day: 'Thu', available: true },
    { date: '2025-01-24', day: 'Fri', available: true }
  ];

  const handleScheduleMeeting = () => {
    // Simulate meeting scheduling
    alert('Meeting scheduled successfully! You will receive a calendar invitation shortly.');
  };

  return (
    <div className="bg-card rounded-xl p-6 lg:p-8 shadow-premium">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
          <Icon name="Calendar" size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">Schedule a Meeting</h3>
          <p className="text-sm text-text-secondary">Book a time that works for both of us</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Meeting Types */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Meeting Type</h4>
          <div className="space-y-3">
            {meetingTypes.map((meeting, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-surface transition-all duration-300 cursor-pointer"
              >
                <div className={`w-8 h-8 bg-surface rounded-lg flex items-center justify-center ${meeting.color}`}>
                  <Icon name={meeting.icon} size={16} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h5 className="font-medium text-foreground">{meeting.title}</h5>
                    <span className="text-xs text-text-secondary">({meeting.duration})</span>
                  </div>
                  <p className="text-xs text-text-secondary mt-1">{meeting.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Date Selection */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Select Date</h4>
          <div className="grid grid-cols-5 gap-2">
            {availableDates.map((dateObj, index) => (
              <button
                key={index}
                onClick={() => dateObj.available && setSelectedDate(dateObj.date)}
                disabled={!dateObj.available}
                className={`p-3 rounded-lg text-center transition-all duration-300 ${
                  selectedDate === dateObj.date
                    ? 'bg-primary text-primary-foreground'
                    : dateObj.available
                    ? 'bg-surface hover:bg-primary/10 text-foreground'
                    : 'bg-muted text-text-secondary cursor-not-allowed opacity-50'
                }`}
              >
                <div className="text-xs font-medium">{dateObj.day}</div>
                <div className="text-sm font-bold mt-1">
                  {new Date(dateObj.date).getDate()}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        {selectedDate && (
          <div>
            <h4 className="text-sm font-medium text-foreground mb-3">Available Times</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => slot.available && setSelectedTimeSlot(slot.time)}
                  disabled={!slot.available}
                  className={`p-3 rounded-lg text-center transition-all duration-300 ${
                    selectedTimeSlot === slot.time
                      ? 'bg-primary text-primary-foreground'
                      : slot.available
                      ? 'bg-surface hover:bg-primary/10 text-foreground'
                      : 'bg-muted text-text-secondary cursor-not-allowed opacity-50'
                  }`}
                >
                  <div className="text-sm font-medium">{slot.time}</div>
                  <div className="text-xs text-current opacity-70">{slot.timezone}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Timezone Info */}
        <div className="bg-surface rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Globe" size={16} className="text-primary" />
            <span className="text-sm font-medium text-foreground">Timezone Information</span>
          </div>
          <div className="text-xs text-text-secondary space-y-1">
            <p>• All times shown in East Africa Time (GMT+3)</p>
            <p>• Meeting links will be sent via email</p>
            <p>• Reschedule up to 2 hours before the meeting</p>
          </div>
        </div>

        {/* Schedule Button */}
        {selectedDate && selectedTimeSlot && (
          <Button
            onClick={handleScheduleMeeting}
            variant="default"
            size="lg"
            fullWidth
            iconName="Calendar"
            iconPosition="left"
            className="bg-success hover:bg-success/90"
          >
            Schedule Meeting for {selectedDate} at {selectedTimeSlot}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CalendarIntegration;