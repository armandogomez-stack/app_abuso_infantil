const ImageCard = ({ imageSrc, label, onSelect, isSelected }) => {
   
    return ( 
        <div
        className={`border-4 p-4 m-2 rounded-lg shadow-lg cursor-pointer transition duration-300 ${
            isSelected ? 'border-red-500' : 'border-gray-300'
        }`}
        onClick={() => onSelect(label)}
    >
        <img src={imageSrc} alt={label} className="w-40 h-32 object-cover mb-2 rounded" />
        <div className="text-center text-lg font-bold">{label}</div>
    </div>
    
     );
}
 
export default ImageCard;