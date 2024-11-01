const getImageURL = async (image: File) => {
      try {
            const formData = new FormData();
            formData.append('image', image);
            const key = process.env.NEXT_PUBLIC_IMGBB_SECRET;

            const response = await fetch(`https://api.imgbb.com/1/upload?key=${key}`, {
                  method: 'POST',
                  body: formData,
            });

            if (!response.ok) {
                  throw new Error('Image upload failed.');
            }

            const data = await response.json();
            return data.data.display_url;
      } catch (error) {
            console.error(error);
      }
};

export default getImageURL;
