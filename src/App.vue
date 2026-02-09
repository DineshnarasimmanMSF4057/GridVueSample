<template>
  <div class="col-lg-12 control-section">
    <div>
      <ejs-tab id="tab_default" :created="created" heightAdjustMode="Auto">
        <e-tabitems>
          <e-tabitem :header="headerText0" :content="'loginForm'"></e-tabitem>
          <template v-slot:loginForm>
            <div class="login-form">
              <Grid
                v-if="showGrid"
                id="grid1"
                :gridData="gridOneData"
                :gridCols="gridOneCategoryCols"
              />
            </div>
            <div class="login-form">
              <Grid
                v-if="showGrid"
                id="grid2"
                :gridData="gridTwoData"
                :gridCols="gridTwoCategoryCols"
              />
            </div>
          </template>
        </e-tabitems>
      </ejs-tab>
    </div>
  </div>
</template>
<script lang="ts">
import { Browser } from '@syncfusion/ej2-base';
import { createApp } from 'vue';
import {
  TabComponent,
  TabItemDirective,
  TabItemsDirective,
} from '@syncfusion/ej2-vue-navigations';

import Grid from './Grid.vue';

export default {
  components: {
    Grid,
    'ejs-tab': TabComponent,
    'e-tabitem': TabItemDirective,
    'e-tabitems': TabItemsDirective,
  },
  data: () => {
    return {
      showGrid: false,
      gridOneData: [
        {
          id: 1,
          usercode: 'USR001',
          email: 'user1@example.com',
          createdDate: '2024-12-01T10:00:00Z',
          category: 'Food',
          status: 1,
        },
        {
          id: 2,
          usercode: 'USR002',
          email: 'user2@example.com',
          createdDate: '2024-11-15T14:30:00Z',
          category: 'Beverage',
          status: 0,
        },
        {
          id: 3,
          usercode: 'USR003',
          email: 'user3@example.com',
          createdDate: '2025-01-20T09:15:00Z',
          category: 'Electronics',
          status: 1,
        },
      ],
      gridTwoData: [
        {
          product_id: 101,
          product_name: 'Wireless Keyboard',
          category: 'Electronics',
        },
        {
          product_id: 102,
          product_name: 'Cola',
          category: 'Beverage',
        },
      ],

      gridOneCategoryCols: [
        {
          f_en_code: 'id',
          f_full_name: 'ID',
          GGridFreeze: 'left',
          GGridType: 'number',
          GGridIsPrimaryKey: 'true',
          F_Width: 100,
          F_systemVisible: true,
          TextAlign: 'Right',
          GGridFormatter: null,
          GGridEditType: 'numericedit',
          GGridEditTemplate: null,
          GGridEdit: null,
          GGridValidationRules: null,
        },
        {
          f_en_code: 'usercode',
          f_full_name: 'User Code',
          GGridFreeze: null,
          GGridType: 'string',
          GGridIsPrimaryKey: 'false',
          F_Width: 300,
          F_systemVisible: true,
          TextAlign: 'Left',

          GGridEditTemplateCustomName: 'ComboBox',
          GGridFormatter: null,
          GGridEditType: 'stringedit',
          GGridEditTemplate: null,
          GGridEdit: 'ComboBox',
          GGridValidationRules: '{"required": true}',
        },
        {
          f_en_code: 'email',
          f_full_name: 'Email',
          GGridFreeze: null,
          GGridType: 'string',
          GGridIsPrimaryKey: 'false',
          F_Width: 250,

          GGridEditTemplateCustomName: 'TextBox',
          F_systemVisible: true,
          TextAlign: 'Left',
          GGridFormatter: null,
          GGridEditType: 'stringedit',
          GGridEditTemplate: null,
          GGridEdit: null,
          GGridValidationRules: '{"required": true, "email": true}',
        },
        {
          f_en_code: 'createdDate',
          f_full_name: 'Created Date',
          GGridFreeze: null,
          GGridType: 'date',
          GGridIsPrimaryKey: 'false',
          F_Width: 180,
          F_systemVisible: true,
          TextAlign: 'Center',

          GGridEditType: 'datepickeredit',
          GGridEditTemplate: null,
          GGridEdit: 'DatePicker',
          GGridValidationRules: null,
        },
        {
          f_en_code: 'category',
          f_full_name: 'Active',
          GGridFreeze: null,
          GGridType: 'string',
          GGridIsPrimaryKey: 'false',
          F_Width: 100,
          F_systemVisible: true,
          TextAlign: 'Center',
          GGridEdit: 'ComboBox',
          GGridEditTemplateCustomName: 'ComboBox',
          GGridEditType: 'dropdownedit',
          GGridEditTemplate: null,

          GGridValidationRules: null,
        },
        {
          f_en_code: 'status',
          f_full_name: 'Status',
          GGridFreeze: null,
          GGridType: 'string',
          GGridIsPrimaryKey: 'false',
          F_Width: 150,
          F_systemVisible: true,
          TextAlign: 'Center',
          GGridFormatter: (val) => (val === 1 ? 'Active' : 'Inactive'),
          GGridEditType: null,
          GGridEditTemplate: null,
          GGridEdit: null,
          GGridValidationRules: null,
        },
      ],
      gridTwoCategoryCols: [
        {
          f_en_code: 'product_id',
          f_full_name: 'Product ID',
          GGridFreeze: 'left',
          GGridType: 'number',
          GGridIsPrimaryKey: 'true',
          F_Width: 120,
          F_systemVisible: true,
          TextAlign: 'Right',
          GGridFormatter: null,
          GGridEditType: 'numericedit',
          GGridEditTemplate: null,
          GGridEdit: null,
          GGridValidationRules: null,
        },
        {
          f_en_code: 'product_name',
          f_full_name: 'Product Name',
          GGridFreeze: null,
          GGridType: 'string',
          GGridIsPrimaryKey: 'false',
          F_Width: 250,

          GGridEditTemplateCustomName: 'TextBox',
          F_systemVisible: true,
          TextAlign: 'Left',
          GGridFormatter: null,
          GGridEditType: 'stringedit',
          GGridEditTemplate: null,
          GGridEdit: 'TextBox',
          GGridValidationRules: '{"required": true}',
        },
        {
          f_en_code: 'category',
          f_full_name: 'Category',
          GGridFreeze: null,
          GGridType: 'string',
          GGridIsPrimaryKey: 'false',
          F_Width: 200,
          F_systemVisible: true,
          GGridEdit: 'ComboBox',
          GGridEditTemplateCustomName: 'ComboBox',
          TextAlign: 'Left',
          GGridFormatter: null,
          GGridEditType: 'dropdownedit',
          GGridEditTemplate: null,

          GGridValidationRules: null,
        },
      ],
      headerText0: { text: 'Grid', iconCss: 'Grid' },
    };
  },
  methods: {
    created: function (args) {
      this.showGrid = true;
    },
  },
  provide: {
    grid: [],
  },
};
</script>
