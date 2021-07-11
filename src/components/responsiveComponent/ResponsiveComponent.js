import React from 'react';

const ResponsiveComponent = () => {
    return (
        <div className="bg-blue-400 p-8 flex justify-center rounded-lg">
            <div className="bg-gray-100 md:flex lg:block w-3/4 p-8 rounded-lg">
                <img src="https://picsum.photos/300" className="border-2 md:mr-4 md:text-left md:rounded-lg lg:rounded-full border-red-400 lg:mx-auto" alt=""/>
                <div className="text-center">
                    <h1 className="font-bold text-blue-400 font-noto lg:my-4 md:mb-4 lg:text-4xl md:text-2xl">Anna Thompson</h1>
                    <p className="font-noto lg:mt-4 md:mt-0 lg:text-base md:text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                        accusantium architecto culpa, cum delectus eveniet impedit libero molestias, necessitatibus odio
                        placeat rem repudiandae rerum sequi, tenetur voluptate voluptates. Asperiores culpa debitis
                        deserunt eaque earum enim, eos error, illo iste itaque laborum libero mollitia nostrum optio,
                        suscipit? Eum fuga laboriosam ut!</p>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveComponent;