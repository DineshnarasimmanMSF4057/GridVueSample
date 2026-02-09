<template>
  <div class="col-lg-12 control-section">
    <!-- Culture switcher -->
    <div style="margin-bottom: 12px; display:flex; gap:12px; align-items:center;">
      <label for="culture">Culture:</label>
      <select id="culture" v-model="selectedCulture" @change="onCultureChange">
        <option value="en-GB">en-GB</option>
        <option value="en-US">en-US</option>
        <option value="tr">tr</option>
        <option value="de">de</option>
        <option value="fr">fr</option>
      </select>
    </div>

    <div v-if="cultureReady">
      <ejs-grid
        :dataSource="data"
        :allowPaging="true"
        :allowSorting="true"
        adaptiveUIMode="Mobile"
        :enableAdaptiveUI="true"
        :allowFiltering="true"
        :editSettings="editSettings"
        :toolbar="toolbar"
        :filterSettings="filterSettings"
        locale="en"
      >
        <e-columns>
          <e-column
            field="SNO"
            headerText="S NO"
            width="120"
            :isPrimaryKey="true"
            :validationRules="orderidrules"
            textAlign="Right"
            type="number"
          ></e-column>

          <e-column
            field="Model"
            headerText="Model Name"
            width="200"
            :validationRules="customeridrules"
          ></e-column>

          <e-column field="Developer" headerText="Developer" width="160"></e-column>

          <e-column
            field="ReleaseDate"
            headerText="Released Date"
            width="160"
            type="date"
            :format="{ type: 'date', skeleton: 'yMd' }"
          ></e-column>

          <e-column
            field="AndroidVersion"
            headerText="Android Version"
            width="160"
            type="number"
            textAlign="Right"
          ></e-column>

          <!-- NEW: Currency column -->
          <e-column
            field="Price"
            headerText="Price"
            width="140"
            type="number"
            format="C2"
            textAlign="Right"
          ></e-column>
        </e-columns>
      </ejs-grid>
    </div>

    <div v-else>
      <span>Loading culture…</span>
    </div>
  </div>
</template>

<script>
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Filter,
  Sort,
  Edit,
  Toolbar,
  Page,
} from '@syncfusion/ej2-vue-grids';

import { loadCldr, setCulture, setCurrencyCode, L10n } from '@syncfusion/ej2-base';
// Uses the static CLDR imports file from the earlier answer
import { CLDR, CLDR_SUPP } from './cldr-static';

export default {
  name: 'GridWithDynamicCulture',
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
  },
  data() {
    return {
      data: [
        { SNO: 1, Model: 'Pixel 9', Developer: 'Google', ReleaseDate: new Date(2024, 9, 12), AndroidVersion: 14, Price: 799 },
        { SNO: 2, Model: 'Galaxy S24', Developer: 'Samsung', ReleaseDate: new Date(2024, 0, 31), AndroidVersion: 14, Price: 899 },
        { SNO: 3, Model: 'OnePlus 12', Developer: 'OnePlus', ReleaseDate: new Date(2023, 11, 11), AndroidVersion: 14, Price: 699 },
        { SNO: 4, Model: 'Xperia 1 VI', Developer: 'Sony', ReleaseDate: new Date(2024, 4, 17), AndroidVersion: 14, Price: 1099 },
        { SNO: 5, Model: 'Nothing Phone (2)', Developer: 'Nothing', ReleaseDate: new Date(2023, 6, 17), AndroidVersion: 13, Price: 599 },
        { SNO: 6, Model: 'Mi 14', Developer: 'Xiaomi', ReleaseDate: new Date(2023, 9, 26), AndroidVersion: 14, Price: 649 },
        { SNO: 7, Model: 'ROG Phone 8', Developer: 'ASUS', ReleaseDate: new Date(2024, 0, 9), AndroidVersion: 14, Price: 999 },
        { SNO: 8, Model: 'Moto Edge 40', Developer: 'Motorola', ReleaseDate: new Date(2023, 3, 4), AndroidVersion: 13, Price: 499 },
        { SNO: 9, Model: 'Pixel 8a', Developer: 'Google', ReleaseDate: new Date(2024, 4, 14), AndroidVersion: 14, Price: 499 },
        { SNO: 10, Model: 'Find X7', Developer: 'OPPO', ReleaseDate: new Date(2024, 0, 8), AndroidVersion: 14, Price: 999 },
        { SNO: 11, Model: 'Vivo X100', Developer: 'Vivo', ReleaseDate: new Date(2023, 10, 13), AndroidVersion: 14, Price: 899 },
        { SNO: 12, Model: 'Honor Magic6', Developer: 'Honor', ReleaseDate: new Date(2024, 0, 10), AndroidVersion: 14, Price: 799 },
        { SNO: 13, Model: 'Redmi Note 13', Developer: 'Xiaomi', ReleaseDate: new Date(2023, 8, 21), AndroidVersion: 13, Price: 299 },
        { SNO: 14, Model: 'Nokia G42', Developer: 'HMD', ReleaseDate: new Date(2023, 5, 28), AndroidVersion: 13, Price: 249 },
        { SNO: 15, Model: 'Zenfone 10', Developer: 'ASUS', ReleaseDate: new Date(2023, 5, 29), AndroidVersion: 13, Price: 699 },
      ],
      selectedCulture: 'en-GB', // initial culture
      cultureReady: false,
      orderidrules: { required: true, number: true },
      customeridrules: { required: true },
      editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
      },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
      filterSettings: { type: 'Excel' },
    };
  },
  provide: {
    grid: [Filter, Sort, Edit, Toolbar, Page],
  },

  async created() {
    // Keep UI strings in English while formatting follows culture
    L10n.load({ en: {} });

    await this.setSyncfusionCulture(this.selectedCulture);
    this.cultureReady = true;
  },

  methods: {
    /**
     * Map culture to a currency code for price formatting.
     * Adjust as needed for your business rules.
     */
    currencyFor(cultureCode) {
      const short = cultureCode.split('-')[0];
      if (cultureCode === 'en-GB') return 'GBP';
      if (cultureCode === 'en-US') return 'USD';
      if (short === 'de' || short === 'fr') return 'EUR';
      if (short === 'tr') return 'TRY';
      // Fallback
      return 'USD';
    },

    /**
     * Apply CLDR + culture + currency for Syncfusion formatting.
     */
    async setSyncfusionCulture(cultureCode) {
      try {
        const short = cultureCode.split('-')[0];
        const loc = CLDR[short];
        if (!loc) {
          throw new Error(`Locale not bundled: ${short}. Add it in src/utils/cldr-static.js`);
        }

        const { numberingSystems, likelySubtags, weekData } = CLDR_SUPP;

        // Load the CLDR segments for the chosen locale
        loadCldr(
          loc.gregorian,
          loc.timeZones,
          loc.currencies,
          loc.numbers,
          numberingSystems,
          likelySubtags,
          weekData
        );

        // Set currency code BEFORE setting culture (ensures currency symbol/format aligns)
        setCurrencyCode(this.currencyFor(cultureCode));

        // Apply culture (en-GB vs en-US decides date format, decimal/group separators, etc.)
        setCulture(cultureCode);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error applying Syncfusion culture:', cultureCode, error);
      }
    },

    async onCultureChange() {
      this.cultureReady = false;
      await this.setSyncfusionCulture(this.selectedCulture);
      this.cultureReady = true;
    },
  },
};
</script>

<style scoped>
/* Optional styles */
</style>
``