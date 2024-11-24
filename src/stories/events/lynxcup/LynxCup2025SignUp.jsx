import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import bannerImage from '../../assets/MascotFullColor.svg';

export default function LynxCup2025SignUp({ onSubmit, slotsFilled }) {
  const [formData, setFormData] = useState({
    preferredFirstName: '',
    preferredLastName: '',
    legalFirstName: '',
    legalLastName: '',
    email: '',
    isGuardian: false,
    guardianFirstName: '',
    guardianLastName: '',
    events: [],
    teamName: '',
    teamMembers: '',
    clubAffiliation: '',
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let price = 40;
    if (formData.events.includes('Open Longsword')) {
      price += 20;
    }
    if (formData.events.includes('Open Saber')) {
      price += 20;
    }
    if (formData.events.includes('Marginalised Genders Longsword')) {
      price += 0;
    }
    setTotalPrice(price);
  }, [formData.events]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleEventChange = (e) => {
    const { value, checked } = e.target;
    setFormData({
      ...formData,
      events: checked ? [...formData.events, value] : formData.events.filter((event) => event !== value),
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.legalFirstName) {
      newErrors.legalFirstName = 'Legal First Name is required';
    }
    if (!formData.legalLastName) {
      newErrors.legalLastName = 'Legal Last Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsLoading(true);
      if (onSubmit) {
        onSubmit(formData);
      }
      console.log(formData);
    }
  };

  const getRemainingSlots = (totalSlots, filledSlots) => totalSlots - filledSlots;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center relative">
      <div className="relative z-10 max-w-md w-full bg-white rounded-lg shadow-lg p-4 font-poppins">
        <div className="relative mb-8">
          <img src={bannerImage} alt="Banner" className="w-full h-full object-cover rounded-t-lg" />
        </div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Lynx Cup 2025</h2>
          <p className="text-sm mb-2">February 14th to 16th, 2025</p>
          <p className="text-sm mb-2">Welcome to Lynx Cup 2025! Columbus United Fencing Club is proud to bring together our experienced 
          judges and event staff to host our largest and most exciting event of the year.</p>
        </div>
        <hr className="border-gray-300 my-8" />
        <p className="mb-5 text-gray-700 text-sm">
          <div className="font-bold text-lg">Pricing</div>
          <b>Before January 15th, 2025:</b>
          <ul className="ml-6">
            <li>Base Admission: $45</li>
            <li>Event Fee: $45/event</li>
          </ul>
          <b>On and After January 15th, 2025:</b>
          <ul className="ml-6">
            <li>Base Admission: $50</li>
            <li>Event Fee: $50/event</li>
          </ul>
          <br />
          <div className='text-xs font-italic'>Registration cut off for each event is at the start of check In.</div>
          <hr className="border-gray-300 my-8" />
          <div className="font-bold text-lg">Events and Schedule</div>
          <br/>
          <div className="font-bold text-md">Friday, Feb 14th</div>
          <ul className="ml-6">
            <li>Noon: Open Saber</li>
            <li>4pm: Longsword C</li>
          </ul>
          <br/>
          <div className="font-bold text-md">Saturday, Feb 15th</div>
          <ul className="ml-6">
            <li>9am: Longsword B</li>
            <li>Noon: Longsword A</li>
          </ul>
          <br/>
          <div className="font-bold text-md">Sunday, Feb 16th</div>
          <ul className="ml-6">
            <li>9am: Marginalized Gender Longsword*</li>
            <li>Noon: Rapier And Dagger</li>
            <li>Noon: Sword and Buckler</li>
          </ul>
          <br/>
          <p className="text-xs font-italic">
          *MG Longsword: No additional fee. Open to trans and cis women, trans men, 
          non-binary people, intersex people, and other gender expansive people 
          underrepresented in HEMA.
        </p>
          <hr className="border-gray-300 my-8" />
          <div className="font-bold text-lg">Location</div>
          <p className="text-sm">
            6475 E Main St. #111
            <br />
            Reynoldsburg, OH 43068
          </p>
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 px-5">
          <hr className="border-gray-300 my-8" />
          <h3 className="block mb-5 font-extrabold text-sm tracking-wider text-xs">ABOUT YOU</h3>
          <div className="space-y-2">
            <input
              type="text"
              name="preferredFirstName"
              value={formData.preferredFirstName}
              onChange={handleChange}
              placeholder="Preferred First Name"
              className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
            />
          </div>
          <div className="space-y-2">
            <input
              type="text"
              name="preferredLastName"
              value={formData.preferredLastName}
              onChange={handleChange}
              placeholder="Preferred Last Name"
              className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
            />
          </div>
          <div className="space-y-2">
            <input
              type="text"
              name="legalFirstName"
              value={formData.legalFirstName}
              onChange={handleChange}
              placeholder="Legal First Name"
              className={`w-full px-3 py-2 border ${errors.legalFirstName ? 'border-red-500' : 'border-gray-300'} rounded placeholder:text-sm focus:border-DeepRed`}
            />
            {errors.legalFirstName && <p className="text-red-500 text-xs">{errors.legalFirstName}</p>}
          </div>
          <div className="space-y-2">
            <input
              type="text"
              name="legalLastName"
              value={formData.legalLastName}
              onChange={handleChange}
              placeholder="Legal Last Name"
              className={`w-full px-3 py-2 border ${errors.legalLastName ? 'border-red-500' : 'border-gray-300'} rounded placeholder:text-sm focus:border-DeepRed`}
            />
            {errors.legalLastName && <p className="text-red-500 text-xs">{errors.legalLastName}</p>}
          </div>
          <div className="space-y-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded placeholder:text-sm focus:border-DeepRed`}
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
          <div className="space-y-2">
            <input
              type="text"
              name="clubAffiliation"
              value={formData.clubAffiliation}
              onChange={handleChange}
              placeholder="Club Affiliation"
              className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
            />
          </div>
          <div className="flex items-center space-y-2">
            <input
              type="checkbox"
              name="isGuardian"
              checked={formData.isGuardian}
              onChange={handleChange}
              className="mr-2 h-6 w-6 text-DeepRed border-DeepRed focus:ring-DeepRed"
            />
            <label className="block mb-1 text-sm">
              I am a guardian signing up on behalf of a minor that is at least 14 years of age
            </label>
          </div>
          {formData.isGuardian && (
            <>
              <div className="space-y-2">
                <input
                  type="text"
                  name="guardianFirstName"
                  value={formData.guardianFirstName}
                  onChange={handleChange}
                  placeholder="Guardian First Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
                />
              </div>
              <div className="space-y-2">
                <input
                  type="text"
                  name="guardianLastName"
                  value={formData.guardianLastName}
                  onChange={handleChange}
                  placeholder="Guardian Last Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded placeholder:text-sm focus:border-DeepRed"
                />
              </div>
            </>
          )}
          <hr className="border-gray-300 my-8" />
          <div className="space-y-2">
            <label className="block mb-5 font-extrabold text-sm tracking-wider text-xs">SELECT EVENTS</label>
            <div className="flex flex-col space-y-4">
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="events"
                    value="Open Longsword"
                    checked={formData.events.includes('Open Longsword')}
                    onChange={handleEventChange}
                    disabled={getRemainingSlots(72, slotsFilled.longsword) === 0}
                    className="mr-2 h-6 w-6 text-DeepRed border-DeepRed focus:ring-DeepRed"
                  />
                  Open Longsword (+ $20)
                </label>
                <span className="text-xs pl-8 font-bold block">
                  {getRemainingSlots(72, slotsFilled.longsword)} slots out of 72 remaining
                </span>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="events"
                    value="Open Saber"
                    checked={formData.events.includes('Open Saber')}
                    onChange={handleEventChange}
                    disabled={getRemainingSlots(36, slotsFilled.saber) === 0}
                    className="mr-2 h-6 w-6 text-DeepRed border-DeepRed focus:ring-DeepRed"
                  />
                  Open Saber (+ $20)
                </label>
                <span className="text-xs pl-8 font-bold block">
                  {getRemainingSlots(36, slotsFilled.saber)} slots out of 36 remaining
                </span>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="events"
                    value="Marginalised Genders Longsword"
                    checked={formData.events.includes('Marginalised Genders Longsword')}
                    onChange={handleEventChange}
                    disabled={getRemainingSlots(28, slotsFilled.mg) === 0}
                    className="mr-2 h-6 w-6 text-DeepRed border-DeepRed focus:ring-DeepRed"
                  />
                  Marginalised Genders Longsword
                </label>
                <span className="text-xs pl-8 font-bold block">
                  {getRemainingSlots(28, slotsFilled.mg)} slots out of 28 remaining
                </span>
              </div>
            </div>
          </div>
          <hr className="border-gray-300 my-16" />
          <div className="flex justify-between font-bold mt-2">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="text-center mt-4">
            <button
              type="submit"
              className="bg-white text-black text-sm font-bold mx-4 px-4 py-2 hover:bg-black hover:text-white hover:border-white border-2 border-black"
            >
              CHECKOUT
            </button>
            {isLoading && <p className="text-DeepRed mt-2">Loading...</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

LynxCup2025SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  slotsFilled: PropTypes.shape({
    longsword: PropTypes.number.isRequired,
    saber: PropTypes.number.isRequired,
    mg: PropTypes.number.isRequired,
  }).isRequired,
};
