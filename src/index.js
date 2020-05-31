import "./styles.css";

document.getElementById("app").innerHTML = `
<main role="main">
      <p class="alert alert-info" role="alert"></p>
      <p class="alert alert-danger" role="alert"></p>
<div data-phx-main="true" data-phx-session="SFMyNTY.g2gDaAJhBHQAAAAHZAACaWRtAAAAFHBoeC1GaFFDLUJtV3h4MjV6a0JCZAAKcGFyZW50X3BpZGQAA25pbGQACHJvb3RfcGlkZAADbmlsZAAJcm9vdF92aWV3ZAAZRWxpeGlyLldpemFyZFdlYi5HYW1lTGl2ZWQABnJvdXRlcmQAF0VsaXhpci5XaXphcmRXZWIuUm91dGVyZAAHc2Vzc2lvbnQAAAAAZAAEdmlld2QAGUVsaXhpci5XaXphcmRXZWIuR2FtZUxpdmVuBgCN-ARpcgFiAAFRgA.I17LUc5d7fXQhh-g1TAUc9yLAAJvVuVzv007O_8xbrk" data-phx-static="SFMyNTY.g2gDaAJhBHQAAAADZAAKYXNzaWduX25ld2pkAAVmbGFzaHQAAAAAZAACaWRtAAAAFHBoeC1GaFFDLUJtV3h4MjV6a0JCbgYAjfgEaXIBYgABUYA.FQaORoQ0b--nbc6T01EaqhSIo29Guno_3WJSJ00yJVg" data-phx-view="GameLive" id="phx-FhQC-BmWxx25zkBB" class="phx-connected" data-phx-root-id="phx-FhQC-BmWxx25zkBB"><div phx-hook="Game" style="
  display: flex;
  background-color: gold;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
" data-username="byron">
  <div style="
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 16px;
  ">
    <div style="padding: 16px;">
        <div style="display: flex; flex-direction: column; align-items: center;">
    <h2>Trump card</h2>
    <div style="  display: flex;
  background-color: white;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 28px;
  width: 100px;
  height: 140px;
  color: black;
  align-items: center;
  justify-content: center;
  border: 1px solid #AAA;
  border-radius: 6px;
">None</div>
    <p>Trump suit: none</p>
  </div>

    </div>

    <div style="width: 300px; padding: 16px; padding: 16px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <div>Round 10/10</div>
      
        <div>End of Round</div>
      
      

      

      

      
        <button phx-click="continue">continue</button>
      
    </div>

    <div style="padding: 16px;display: flex;flex-direction: column;align-items: center;">
        <table>
    <thead>
      <tr>
        <th></th>
        
          <th>byron</th>
        
          <th>Tonttu</th>
        
          <th>Eric</th>
        
          <th>Brosugi</th>
        
          <th>jeanette</th>
        
          <th>CLICK START NOW</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>bets</td>
        
          <td>2</td>
        
          <td>3</td>
        
          <td>2</td>
        
          <td>2</td>
        
          <td>2</td>
        
          <td>10</td>
        
      </tr>
      <tr>
        <td>tricks</td>
        
          <td>2</td>
        
          <td>1</td>
        
          <td>2</td>
        
          <td>2</td>
        
          <td>2</td>
        
          <td>1</td>
        
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>score</th>
        
          <td>160</td>
        
          <td>210</td>
        
          <td>190</td>
        
          <td>180</td>
        
          <td>100</td>
        
          <td>-270</td>
        
      </tr>
    </tfoot>
  </table>
  <button phx-click="open-scoreboard">Full Scoreboard</button>

    </div>
  </div>

  <div style="display: flex; flex-direction: row; align-items: center; justify-content: left; padding: 16px; background-color: #CCC; border-radius: 6px; width: 100%;">
    <h2 style="writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(-180deg);">Played cards</h2>
    
  </div>

  <div style="display: flex; flex-direction: row; align-items: center; justify-content: left; padding: 16px; width: 100%;">
    <h2 style="writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(-180deg);">Hand</h2>
    <div style="display: flex; flex-wrap: wrap;">
      
    </div>
  </div>
</div>

</div>    </main>
`;
