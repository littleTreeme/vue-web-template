import Vue from 'vue';

import KIcon from '@/components/common/KIcon.vue';

Vue.component('KIcon', KIcon);

const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const req = require.context('./svg', false, /\.svg$/);
requireAll(req);
