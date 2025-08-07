import { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import SEOHead from '../components/SEOHead';
import { brandData } from '../data/brand';
import { branchesData } from '../data/branches';

export default function Book() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Table booking:', formData);
    // TODO: Implement form submission
  };

  const timeSlots = [
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
    "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM"
  ];

  const occasions = [
    "Birthday", "Anniversary", "Business Meeting", "Family Dinner",
    "Date Night", "Celebration", "Casual Dining", "Other"
  ];

  return (
    <>
      <SEOHead
        title={`Book a Table - ${brandData.name} ${brandData.tagline}`}
        description="Book a table at Miya Bhai Food Court for an authentic Hyderabadi dining experience. Reserve your spot at any of our branches across Hyderabad."
        keywords="book table Hyderabad, restaurant reservation, table booking, Hyderabadi restaurant"
      />

      <main className="pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-biryani to-charcoal py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-arabic font-bold text-zaffran mb-4">
              ٹیبل بک کریں
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Book a Table
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              Reserve your table for an unforgettable Hyderabadi dining experience at any of our branches
            </p>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16 lg:py-24 bg-warm-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                  Reserve Your Table
                </h3>
                <p className="text-gray-600">
                  Fill in the details below to book your table
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Booking Form */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Table Reservation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Input
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                          <Input
                            name="phone"
                            type="tel"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <Input
                          name="email"
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        
                        <Select onValueChange={(value) => handleSelectChange('branch', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Branch" />
                          </SelectTrigger>
                          <SelectContent>
                            {branchesData.branches.map((branch) => (
                              <SelectItem key={branch.id} value={branch.name}>
                                {branch.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Input
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                          />
                          
                          <Select onValueChange={(value) => handleSelectChange('time', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Time" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          
                          <Input
                            name="guests"
                            type="number"
                            placeholder="Number of Guests"
                            min="1"
                            max="20"
                            value={formData.guests}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <Select onValueChange={(value) => handleSelectChange('occasion', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Occasion (Optional)" />
                          </SelectTrigger>
                          <SelectContent>
                            {occasions.map((occasion) => (
                              <SelectItem key={occasion} value={occasion}>
                                {occasion}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        
                        <Textarea
                          name="message"
                          placeholder="Special Requests (Optional)"
                          rows={3}
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                        
                        <Button type="submit" className="w-full bg-jade hover:bg-jade/90 text-lg py-3">
                          <Calendar className="w-5 h-5 mr-2" />
                          Reserve Table
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Booking Information */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Phone className="w-5 h-5 text-jade" />
                        Quick Booking
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-2">Call for immediate booking</p>
                      <p className="font-semibold text-lg">{brandData.contact.phone}</p>
                      <p className="text-sm text-gray-500 mt-2">Available during restaurant hours</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-jade" />
                        Booking Guidelines
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-jade mr-2 mt-0.5" />
                          Book 24 hours in advance
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-jade mr-2 mt-0.5" />
                          Tables held for 15 minutes
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-jade mr-2 mt-0.5" />
                          Large groups (8+) call directly
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-jade mr-2 mt-0.5" />
                          Confirmation via SMS/Email
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-jade" />
                        Special Occasions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-2">
                        Celebrating something special? Let us know and we'll make it memorable!
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li>• Birthday decorations</li>
                        <li>• Anniversary surprises</li>
                        <li>• Business meeting setup</li>
                        <li>• Special dietary requirements</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
