class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2')
        title.html('Car Racing Game')
        title.position(width/2,50)
        var input = createInput('Name')
        var button = createButton('Play')
        var greeting = createElement('h3')
        input.position(width/2,150)
        button.position(width/2,200)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value();
            playerCount += 1;
            player.update(name)
            console.log(name)
            player.update(playerCount)
            console.log(playerCount)
            greeting.html('Hello ' +name)
            greeting.position(width/2,160)
        })
    }
}