function Dice({side = 1, borderThickness = 1.2, dotRadius = 1.5}) {
    // Define the grid positions for the dots (out of 24 units)
    const pos = {
      top: 7,
      middle: 12,
      bottom: 17,
      left: 7,
      center: 12,
      right: 17
    };
  
    // Map each side to the specific [cx, cy] coordinates needed
    const dotMapping = {
      1: [[pos.center, pos.middle]],
      2: [[pos.left, pos.top], [pos.right, pos.bottom]],
      3: [[pos.left, pos.top], [pos.center, pos.middle], [pos.right, pos.bottom]],
      4: [[pos.left, pos.top], [pos.right, pos.top], [pos.left, pos.bottom], [pos.right, pos.bottom]],
      5: [[pos.left, pos.top], [pos.right, pos.top], [pos.center, pos.middle], [pos.left, pos.bottom], [pos.right, pos.bottom]],
      6: [[pos.left, pos.top], [pos.right, pos.top], [pos.left, pos.middle], [pos.right, pos.middle], [pos.left, pos.bottom], [pos.right, pos.bottom]],
    };
  
    // Fallback to 1 if the side prop is out of range
    const dots = dotMapping[side] || dotMapping[1];
  
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-16 h-16 text-black">
        {/* The Dice Box */}
        <rect 
          x="3" y="3" width="18" height="18" rx="2" ry="2" 
          fill="white" 
          stroke="currentColor" 
          strokeWidth={borderThickness} 
        />
        
        {/* The Dynamic Dots */}
        <g fill="currentColor">
          {dots.map(([cx, cy], index) => (
            <circle key={index} cx={cx} cy={cy} r={dotRadius} />
          ))}
        </g>
      </svg>
    );
}

export default Dice;