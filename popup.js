document.addEventListener('DOMContentLoaded', do_chart);
function do_chart () {
  var coinArray = []
  var coin
  var tblHtml = '<table class="table is-striped is-bordered is-size-6"><tr><th>Currency</th><th>Price</th><th nowrap>24HR Chg</th></tr><tbody>'
  const PLUS = "class='has-text-success'>"
  const MINUS = "class='has-text-danger'>"
  chrome.storage.sync.get('currencies', function(items) {
    if (!chrome.runtime.error) {
      const url = 'https://min-api.cryptocompare.com/data/pricemultifull?tsyms=USD&fsyms=' + items.currencies
// const url = 'https://min-api.cryptocompare.com/data/pricemultifull?tsyms=USD&fsyms=BTC,BTC,CLOAK,ETH,BTS,BCH,BURST'
      axios.get(url).then(function(res){
        for (coin in res.data.DISPLAY){
          coinArray.push(res.data.DISPLAY[coin])
        }
        for( var i = 0; i< coinArray.length; i++ ){
          var chg = Number(coinArray[i]['USD']['CHANGEPCT24HOUR'])
          var cssCls = chg >= 0 ? PLUS : MINUS
          tblHtml+="<tr>"
          tblHtml+="<td>" + coinArray[i]['USD']['FROMSYMBOL']+"</td>"
          tblHtml+="<td style='white-space: nowrap'>" + coinArray[i]['USD']['PRICE']+"</td>"
          tblHtml+="<td " + cssCls + coinArray[i]['USD']['CHANGEPCT24HOUR'] +"%</td>"
          tblHtml+="</tr>"
        }
        tblHtml+="</tbody></table>"
        document.getElementById('charts').innerHTML += tblHtml
      }).catch(function(err){
        console.log(err)
      });
     }
   });
}
