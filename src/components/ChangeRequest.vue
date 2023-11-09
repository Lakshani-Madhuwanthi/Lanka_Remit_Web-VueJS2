<template>
  <section>
    <b-collapse
        class="card"
        animation="slide"
        style="margin-bottom: 20px"
        :open="false"
        v-if="data && data.length > 0"
    >
      <template #trigger="props">
        <div
            class="card-header"
            role="button"
            aria-controls="contentIdForA11y3"
            style="background-color: #7957d5; color: white"
            :aria-expanded="props.open">
          <p class="card-header-title" style="color: white">
            Change Requests
            <b-tag type="is-white" style="margin-left: 5px; color: #7957d5; font-weight: bold; border-radius: 25px">{{data.length}}</b-tag>
          </p>
          <a class="card-header-icon">
            <b-icon
                :icon="props.open ? 'menu-down' : 'menu-up'">
            </b-icon>
          </a>
        </div>
      </template>

      <div class="card-content" type="is-primary">
        <div >
          <b-table :data="data" paginated pagination-position="bottom" per-page="5">

            <b-table-column field="id" label="ID" width="40" v-slot="props" numeric>
              {{ props.index + 1 }}
            </b-table-column>

            <b-table-column field="pendingAction" label="Pending Action" v-slot="props">
              {{ props.row.pendingAction }}
            </b-table-column>

            <b-table-column field="requestedBy" label="Requested By" v-slot="props">
              {{ props.row.requestedBy }}
            </b-table-column>

            <b-table-column field="requestedTime" label="Requested Time" centered v-slot="props">
            <span class="tag is-success">
                {{ new Date(props.row.requestedTime).toLocaleString() }}
            </span>
            </b-table-column>

            <b-table-column label="Action" v-slot="props">
              <b-button type="is-danger"
                        size="is-small"
                        icon-right="eye"
                        @click="selectChangeRequest(props.row)"
              >
                View
              </b-button>

            </b-table-column>

          </b-table>
        </div>
      </div>
      <footer class="card-footer">
      </footer>
    </b-collapse>

    <div v-if="customChangeRequest === undefined">
      <change-request-approve-modal
          :is-visible="isApproveModalActive"
          :change-request="selectedChangeRequest"
          :filter-out="filterOut"
          :is-loading="isLoading"
          @close-modal="closeApproveModal()"
          @approve-or-reject="approve_or_reject"
      >
      </change-request-approve-modal>
    </div>

    <div v-if="customChangeRequest === 'providerCurrency'">
      <provider-currency-approve-modal
          :is-visible="isApproveModalActive"
          :change-request="selectedChangeRequest"
          :filter-out="filterOut"
          :is-loading="isLoading"
          @close-modal="closeApproveModal()"
          @approve-or-reject="approve_or_reject"
      >
      </provider-currency-approve-modal>
    </div>

  </section>
</template>

<script>

import ChangeRequestApproveModal from "@/components/ChangeRequestApproveModal";
import ProviderCurrencyApproveModal from "@/components/ProviderCurrencyApproveModal";

export default {
  name: "ChangeRequest",
  components: {ChangeRequestApproveModal, ProviderCurrencyApproveModal},
  props: ['data', 'filterOut', 'isLoading', 'customChangeRequest'],
  emits: ['approve-or-reject'],
  data() {
    return {
      stickyHeaders: true,
      dateSearchable: false,
      isApproveModalActive: false,
      selectedChangeRequest: null
    }
  },

  computed: {
  },

  methods: {
    approve_or_reject: function (action){
      let data = {
        changeRequestID : this.selectedChangeRequest.changeRequestId,
        actionTaken : action
      }
      this.$emit('approve-or-reject', data)
    },

    closeApproveModal: function (){
      this.isApproveModalActive = false
      this.selectedChangeRequest = null
    },

    selectChangeRequest: function (e){
      this.selectedChangeRequest = e

      this.isApproveModalActive = true
    }
  }
}
</script>

<style scoped>

</style>
