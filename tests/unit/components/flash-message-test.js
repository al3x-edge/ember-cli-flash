import {
  moduleForComponent,
  test
} from 'ember-qunit';
import FlashMessage from 'ember-cli-flash/flash/object';

let flash;

moduleForComponent('flash-message', 'FlashMessageComponent', {
  beforeEach() {
    flash = FlashMessage.create({
      message      : 'test',
      type         : 'test',
      timeout      : 50,
      showProgress : true
    });
  },

  afterEach() {
    flash = null;
  }
});

test('it renders with the right props', function(assert) {
  assert.expect(6);

  // creates the component instance
  const component = this.subject({ flash });
  assert.equal(component._state, 'preRender');

  // render the component on the page
  this.render();
  assert.equal(component._state, 'inDOM');
  assert.equal(component.get('active'), true);
  assert.equal(component.get('alertType'), 'alert alert-test');
  assert.equal(component.get('flashType'), 'Test');
  assert.equal(component.get('progressDuration'), `transition-duration: ${flash.get('timeout')}ms`);
});
