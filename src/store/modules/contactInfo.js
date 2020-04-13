const state = {
    cause:
     `<h4>CONTACT INFO</h4>
     </div>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit velit justo.</p>
     <p><b>email:</b> <span class="mailc"> info@display.com</span></p>
     <p><b>phone:</b> 1.306.222.4545</p>`,
    chours: ` <h4>STORE HOURS</h4>
      <table>
        <tr>
          <td>Monday - Thursday</td>
          <td>8 am - 5</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>8 am - 6 pm</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>9 am - 5 pm</td>
        </tr>
        <tr>
          <td>Sunday & Holidays</td>
          <td>Closed</td>
        </tr>
      </table>`,
}
const getters = {
    cause(state) {
        return state.cause
    },
    chours(state) {
        return state.chours
    }
}

export default {
    state,
    getters
}