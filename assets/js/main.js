document.addEventListener('DOMContentLoaded', function () {
    criaCards();
});
$(window).on('load', function() {
    $('#loading').fadeOut('slow', function() {
      $('#root').fadeIn('slow');
    });
});
function criaCards() {

    let cards = [
        {
            "link": "https://wa.me/message/QTW6RQXYYNAIA1?fbclid=PAAaYxPXVY2iuQwgpijPvE3uFtY_yvgwYzCS-DiYTRSNhJJ4oiNcdlYCD8iAA",
            "titulo":"Fale comigo",
            "text":"Click aqui",
            "image": "message.png"
        },
        {
            "link": "https://www.instagram.com/ramostattoo017",
            "titulo":"Instagram",
            "text":"Acesse agora",
            "image": "instagram.png"
        },
        {
            "link": "https://www.facebook.com/ramostattoo017vha",
            "titulo":"Facebook",
            "text":"Acesse agora",
            "image": "facebook.png"
        }

    ];

    let html = '';
    for (let i = 0; i < cards.length; i++) {
        let tipo = cards[i].link.match(/wa\.me/) ? "whatsapp" : (cards[i].link.match(/instagram/) ? "instagram" : "facebook");
        html +=`<a class="fundo-blur d-flex align-items-end  p-3 position-relative gap-3 " href="${cards[i].link}"><div><h2>${cards[i].titulo}</h2><h3 class="text-end ">${cards[i].text}</h3></div><div class="imgs"><div data-icon="${tipo}"></div><img class="position-absolute img-social" src="/assets/img/${cards[i].image}" alt="${tipo}"></div></a>\n`;
    }
    document.querySelector("#sociais").innerHTML = html;
    
}
