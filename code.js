function maxMoves(grid) {
    const m = grid.length;
    const n = grid[0].length;
  
    const dp = new Array(m);
    for (let i = 0; i < m; i++) {
      dp[i] = new Array(n).fill(0);
    }
  
    
    for (let col = n - 2; col >= 0; col--) {
      for (let row = 0; row < m; row++) {

        dp[row][col] = 0;
  
        for (let i = -1; i <= 1; i++) {
          const newRow = row + i;
  
          if (newRow >= 0 && newRow < m) {
        
            if (grid[newRow][col + 1] > grid[row][col]) {
            
              dp[row][col] = Math.max(dp[row][col], dp[newRow][col + 1] + 1);
            }
          }
        }
      }
    }
  
    let max = 0;
    for (let i = 0; i < m; i++) {
      max = Math.max(max, dp[i][0]);
    }
  
    return max;
  }
  
  const grid = [
    [[3,2,4],[2,1,9],[1,1,7]] // input takes for showing output
  ];
  
  const result = maxMoves(grid);
  console.log(result); // this console will show the output 
  