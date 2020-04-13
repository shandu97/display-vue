const state = {
    carusel: `<div>
    <img src="images/4.png">
    </div>
    <div>
    <img src="images/3.png">
    </div>
    <div>
    <img src="images/2.png">
    </div>
    <div>
    <img src="images/5.png">
    </div>
    <div>
    <img src="images/6.png">
    </div>
    <div>
    <img src="images/7.png">
    </div>
    <div>
    <img src="images/8.png">
    </div>`,
    parafs:
    `<div>
    <h4>DARK UI KIT FREEBIE!</h4>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.</p>
    </div>

    <div>
    <h4>GRAY UI KIT FREEBIE!</h4>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>

    <div>
    <h4>BLACK UI KIT FREEBIE!</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    <div>
    <h4>BLUE UI KIT FREEBIE!</h4>
    <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
    </div>

    <div>
    <h4>BLACK UI KIT FREEBIE!</h4>
    <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
    </div>

    <div>
    <h4>YELLOW UI KIT FREEBIE!</h4>
    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
    </div>

    <div>
    <h4>YELLOW UI KIT FREEBIE!</h4>
    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
    </div>`
}
const getters = {
    carusel(state) {
        return state.carusel
    },
    parafs(state) {
        return state.parafs
    }
}

export default {
    state,
    getters
}