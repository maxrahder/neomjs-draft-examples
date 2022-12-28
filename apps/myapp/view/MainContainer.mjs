import Component from '../../../node_modules/neo.mjs/src/component/Base.mjs';
import TabContainer from '../../../node_modules/neo.mjs/src/tab/Container.mjs';
import Viewport from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';
// import TextField from '../../../nodeModules/neo.mjs.src/form/field/TextField.mjs';

class MainContainer extends Viewport {
  static getConfig() {
    return {
      className: 'MyApp.view.MainContainer',
      autoMount: true,

      items: [
        {
          module: TabContainer,
          sortable: true,
          style: { flex: 'none', margin: '20px' },

          itemDefaults: {
            module: Component,
            cls: ['neo-examples-tab-component'],
            style: { padding: '20px' },
          },

          items: [
            {
              tabButtonConfig: {
                iconCls: 'fa fa-home',
                text: 'Tab 1',
              },
              vdom: { innerHTML: 'xWelcome to your new Neo App' },
            },
            {
              tabButtonConfig: {
                badgeText: 'hello',
                iconCls: 'fa fa-play-circle',
                text: 'Tab 2',
              },
              vdom: { innerHTML: 'Have fun creating something awesome!' },
            },
            {
              tabButtonConfig: {
                text: 'Tab 3',
              },
              ntype: 'textfield',
              labelText: 'Foo',
            },
          ],
        },
      ],
      /*
       * @member {Object} layout={ntype:'fit'}
       */
      layout: { ntype: 'fit' },
    };
  }
}

Neo.applyClassConfig(MainContainer);

export default MainContainer;
