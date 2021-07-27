document.addEventListener('DOMContentLoaded',()=>{
    alert('Moves: arrow keys \nPlease Play this game in Laptop/Desktop');
    var bird = document.getElementById('bird');
    var display = document.getElementById('container');
    var score = document.getElementById('score');
    var i=0;
    var bird_level_Up_Down = 40;
    var bird_level_Left_right = 10;
    setInterval(()=>{
        score.innerHTML=`Score is: ${i}`;
        i+=1;
    },500);
    
    var id = setInterval(() => {
    
        if (bird_level_Up_Down > 88) {
            
            alert(`Well Played, Try Again!!`);
            clearInterval(id);
                location.reload();
        }
        bird_level_Up_Down += 2;
        bird.style.top = bird_level_Up_Down + 'vh';
    }, 250);
    
    function up(e) {
        if (bird_level_Left_right > 10 && e.keyCode == 37) {
            bird_level_Left_right -= 2;
            bird.style.left = bird_level_Left_right + 'vw';
        }
        if (bird_level_Up_Down > 5 && e.keyCode == 38) {
            bird_level_Up_Down -= 6;
            bird.style.top = bird_level_Up_Down + 'vh';
        }
        if (bird_level_Left_right < 90 && e.keyCode == 39) {
            bird_level_Left_right += 2;
            bird.style.left = bird_level_Left_right + 'vw';
        }
        if (bird_level_Up_Down < 85 && e.keyCode == 40) {
            bird_level_Up_Down += 2;
            bird.style.top = bird_level_Up_Down + 'vh';
        }
    }
    document.addEventListener('keyup', up);
    function enemy() {
        var obstacle_left_up = 84;
        var obstacle_left_down = 84;
        var obstacle_top_up = 0;
        var obstacle_height_up = Math.floor(Math.random() * 16 + 25);
        var gap = Math.floor(Math.random() * 6 + 20);
        var obstacle_height_down = 100 - gap - obstacle_height_up;
        var obstacle_top_down = gap + obstacle_height_up;
        var obstacle_down = document.createElement('div');
        var obstacle_up = document.createElement('div');
        obstacle_up.classList.add('attack');
        obstacle_up.style.left = obstacle_left_up + 'vw';
        obstacle_up.style.top = obstacle_top_up + 'vh';
        obstacle_up.style.height = obstacle_height_up + 'vh';
        obstacle_down.classList.add('attack');
        obstacle_down.style.left = obstacle_left_down + 'vw';
        obstacle_down.style.top = obstacle_top_down + 'vh';
        obstacle_down.style.height = obstacle_height_down + 'vh';
        display.appendChild(obstacle_down);
        display.appendChild(obstacle_up);
        var id2 = setInterval(() => {
            if (obstacle_left_down > 0) {
                obstacle_left_down -= 2;
                obstacle_left_up -= 2;
                obstacle_up.style.left = obstacle_left_up + 'vw';
                obstacle_down.style.left = obstacle_left_down + 'vw';
            }
            else {
                display.removeChild(obstacle_down);
                display.removeChild(obstacle_up);
                clearInterval(id2);
            }
        }, 250);
    
        var id3=setInterval(() => {
            if ((bird_level_Up_Down<obstacle_height_up-2 && Math.abs(obstacle_left_up-bird_level_Left_right)<8))
            {
                clearInterval(id3);
                clearInterval(id4);
                document.removeEventListener('keyup',enemy);
                alert(`Well Played, Try Again!!`);
                location.reload();
            }
            if ((bird_level_Up_Down>obstacle_top_down - 8 && Math.abs(obstacle_left_down-bird_level_Left_right)<8))
            {
                clearInterval(id3);
                clearInterval(id4);
                document.removeEventListener('keyup',enemy);
                alert(`Well played, Try Again!!`);
                location.reload();
            }
        }, 50);
    }
    var id4=setInterval(enemy, 4000);
    
    
});
