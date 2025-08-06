import React from 'react';
import CountUp from '../../Reactbits/CountUp/CountUp';
import { MdInventory, MdSchool, MdLocationCity, MdStar } from 'react-icons/md';

const UserState = () => {
    return (
        <div className="min-w-[375px] max-w-md mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mt-8 relative z-10 ">
            <div className="grid grid-cols-4 gap-2">
                {/* Products */}
                <div className="text-center">
                    <div className="flex justify-center mb-1">
                        <div className="p-1.5 bg-purple-100 rounded-full">
                            <MdInventory className="h-4 w-4 text-purple-600" />
                        </div>
                    </div>
                    <div className="text-sm font-bold text-blue-600">
                        <CountUp
                            to={1000000}
                            duration={2.5}
                            separator=","
                        />+
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Products</div>
                </div>

                {/* Universities */}
                <div className="text-center">
                    <div className="flex justify-center mb-1">
                        <div className="p-1.5 bg-orange-100 rounded-full">
                            <MdSchool className="h-4 w-4 text-orange-600" />
                        </div>
                    </div>
                    <div className="text-sm font-bold text-blue-600">
                        <CountUp
                            to={800}
                            duration={2}
                        />+
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Universities</div>
                </div>

                {/* Global Cities */}
                <div className="text-center">
                    <div className="flex justify-center mb-1">
                        <div className="p-1.5 bg-green-100 rounded-full">
                            <MdLocationCity className="h-4 w-4 text-green-600" />
                        </div>
                    </div>
                    <div className="text-sm font-bold text-blue-600">
                        <CountUp
                            to={250}
                            duration={1.8}
                        />+
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Global Cities</div>
                </div>

                {/* Trust Rating */}
                <div className="text-center">
                    <div className="flex justify-center mb-1">
                        <div className="p-1.5 bg-yellow-100 rounded-full">
                            <MdStar className="h-4 w-4 text-yellow-600" />
                        </div>
                    </div>
                    <div className="text-sm font-bold text-blue-600">
                        <CountUp
                            to={4.7}
                            duration={2.2}
                        />/5
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Trust Rating</div>
                </div>
            </div>
        </div>
    );
};

export default UserState;