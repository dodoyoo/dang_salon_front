import React from 'react';
import { MapPin, Clock, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StoreCardProps {
  id: string;
  name: string;
  rating: number;
  address: string;
  hours: string;
  price: number;
  imageUrl: string;
}

const StoreCard: React.FC<StoreCardProps> = ({
  id,
  name,
  rating,
  address,
  hours,
  price,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
      <div className="relative">
        <img src={imageUrl} alt={name} className="w-full h-56 object-cover" />
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-amber-50">
          <Heart className="w-5 h-5 text-amber-800" />
        </button>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <Link
            to={`/store/${id}`}
            className="text-xl font-semibold text-amber-900 hover:text-amber-700"
          >
            {name}
          </Link>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 mr-1" />
            <span className="text-amber-900">{rating}</span>
          </div>
        </div>
        <div className="space-y-2 text-amber-800">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{address}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>{hours}</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-amber-100">
          <div className="flex justify-between items-center text-sm">
            <span className="text-amber-700">소형견 기준</span>
            <span className="font-semibold text-lg text-amber-900">
              {price.toLocaleString()}원~
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
