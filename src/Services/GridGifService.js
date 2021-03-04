export const getGift = async(category) => { 
    const url = `https://api.giphy.com/v1/gifs/search?api_key=z8GEzcJeDj0gUYRWpLks9cTvl1kURpfO&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const img=data.map(
        (m) => {
            return{
                id:m.id,
                title:m.title,
                url: m.images.downsized_medium.url
            };
            
        }
        
    )
return img;
}