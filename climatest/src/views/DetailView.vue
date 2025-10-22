<template>
    <div class="detail-view">
        <div class="detail-header d-flex justify-content-space-between align-items-center mb-2">
            <div class="">
                <div class="row-11">
                    <router-link to="/archive" class="back-button d-flex align-items-center gap-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <mask id="mask0" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20"
                                height="20">
                                <rect width="20" height="20" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0)">
                                <path
                                    d="M9.2115 10L13.0448 13.8333L12.1667 14.7114L7.45517 10L12.1667 5.28854L13.0448 6.16667L9.2115 10Z"
                                    fill="currentColor" />
                            </g>
                        </svg>
                        <span>Return to the previous page</span>
                    </router-link>
                </div>
                <div class="row-1">
                    <div class="w-100 line">
                    </div>
                </div>
            </div>

        </div>

        <div v-if="user" class="user-header d-flex align-items-center mb-32">
            <div class="d-flex align-items-center gap-16">
                <h1 class="user-name">{{ user.firstName }} {{ user.lastName }}</h1>
                <span :class="['type-badge', typeClass(user.type)]">
                    {{ user.type }}
                </span>
                <span :class="statusClasses(user.status)">
                    {{ formatStatus(user.status) }}
                </span>
            </div>
            <div>
                <button class="delete-button" @click="deleteUser">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M6.66667 17.5C6.20833 17.5 5.81597 17.3368 5.48958 17.0104C5.16319 16.684 5 16.2917 5 15.8333V5H4.16667V3.33333H8.33333V2.5H11.6667V3.33333H15.8333V5H15V15.8333C15 16.2917 14.8368 16.684 14.5104 17.0104C14.184 17.3368 13.7917 17.5 13.3333 17.5H6.66667ZM13.3333 5H6.66667V15.8333H13.3333V5ZM8.33333 14.1667H10V6.66667H8.33333V14.1667ZM11.6667 14.1667H13.3333V6.66667H11.6667V14.1667Z"
                            fill="currentColor" />
                    </svg>
                    Delete user
                </button>
            </div>
        </div>

        <div v-if="user" class="detail-content">
            <div class="block mb-24">
                <div class="card-header d-flex align-items-center">
                    <h3>Personal Information</h3>
                    <div>
                        <button class="edit-button" @click="openPersonalModal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <path
                                    d="M4.16667 15.8333H5.29167L13.0208 8.10417L11.8958 6.97917L4.16667 14.7083V15.8333ZM2.5 17.5V13.9583L13.0208 3.45833C13.1806 3.31944 13.3542 3.21181 13.5417 3.13542C13.7292 3.05903 13.9236 3.02083 14.125 3.02083C14.3264 3.02083 14.5243 3.05903 14.7188 3.13542C14.9132 3.21181 15.0833 3.32639 15.2292 3.47917L16.5417 4.8125C16.6944 4.95833 16.8056 5.12847 16.875 5.32292C16.9444 5.51736 16.9792 5.71181 16.9792 5.90625C16.9792 6.10764 16.9444 6.30208 16.875 6.48958C16.8056 6.67708 16.6944 6.85069 16.5417 7.01042L6.04167 17.5H2.5ZM12.4479 7.55208L11.8958 6.97917L13.0208 8.10417L12.4479 7.55208Z"
                                    fill="currentColor" />
                            </svg>
                            Edit
                        </button>
                    </div>
                </div>
                <div class="info-grid">
                    <div class="info-item">
                        <label>First name</label>
                        <p class="lesser-text">{{ user.firstName }}</p>
                    </div>
                    <div class="info-item">
                        <label>Last Name</label>
                        <p class="lesser-text">{{ user.lastName }}</p>
                    </div>
                    <div class="info-item">
                        <label>E-mail</label>
                        <p class="lesser-text">{{ user.email }}</p>
                    </div>
                    <div class="info-item">
                        <label>Phone</label>
                        <p class="lesser-text">{{ user.phone }}</p>
                    </div>
                    <div class="info-item full-width">
                        <label>Bio</label>
                        <p class="lesser-text">{{ user.bio || 'No bio available' }}</p>
                    </div>
                </div>
            </div>

            <div class="block">
                <div class="card-header d-flex justify-content-space-between align-items-center">
                    <h3>Company</h3>
                    <div>
                        <button class="edit-button" @click="openCompanyModal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <path
                                    d="M4.16667 15.8333H5.29167L13.0208 8.10417L11.8958 6.97917L4.16667 14.7083V15.8333ZM2.5 17.5V13.9583L13.0208 3.45833C13.1806 3.31944 13.3542 3.21181 13.5417 3.13542C13.7292 3.05903 13.9236 3.02083 14.125 3.02083C14.3264 3.02083 14.5243 3.05903 14.7188 3.13542C14.9132 3.21181 15.0833 3.32639 15.2292 3.47917L16.5417 4.8125C16.6944 4.95833 16.8056 5.12847 16.875 5.32292C16.9444 5.51736 16.9792 5.71181 16.9792 5.90625C16.9792 6.10764 16.9444 6.30208 16.875 6.48958C16.8056 6.67708 16.6944 6.85069 16.5417 7.01042L6.04167 17.5H2.5ZM12.4479 7.55208L11.8958 6.97917L13.0208 8.10417L12.4479 7.55208Z"
                                    fill="currentColor" />
                            </svg>
                            Edit
                        </button>
                    </div>
                </div>
                <div class="info-grid">
                    <div class="info-item full-width">
                        <label>Name</label>
                        <p class="lesser-text">{{ user.companyName }}</p>
                    </div>
                    <div class="info-item">
                        <label>Country</label>
                        <p class="lesser-text">{{ user.country }}</p>
                    </div>
                    <div class="info-item">
                        <label>City</label>
                        <p class="lesser-text">{{ user.city }}</p>
                    </div>
                    <div class="info-item">
                        <label>Postal code</label>
                        <p class="lesser-text">{{ user.postalCode }}</p>
                    </div>
                    <div class="info-item">
                        <label>Street & street number</label>
                        <p class="lesser-text">{{ user.address }}</p>
                    </div>
                    <div class="info-item full-width">
                        <label>VAT</label>
                        <p class="lesser-text">{{ user.vatNumber }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="loading">
            Loading user details...
        </div>

        <!-- Personal Information Modal -->
        <teleport to="body">
            <div v-if="isPersonalModalOpen" class="modal-backdrop" role="dialog" aria-modal="true"
                @click.self="closeModal">
                <div class="modal">
                    <header class="modal-header">
                        <h2>Edit Personal Information</h2>
                        <button type="button" class="modal-close" @click="closeModal" aria-label="Close">×</button>
                    </header>
                    <form class="modal-body" @submit.prevent="savePersonal">
                        <div class="modal-row">
                            <label class="modal-field">
                                First Name
                                <input v-model.trim="editForm.firstName" type="text" required />
                            </label>
                            <label class="modal-field">
                                Last Name
                                <input v-model.trim="editForm.lastName" type="text" required />
                            </label>
                        </div>
                        <div class="modal-row">
                            <label class="modal-field">
                                Email
                                <input v-model.trim="editForm.email" type="email" required />
                            </label>
                            <label class="modal-field">
                                Phone
                                <input v-model.trim="editForm.phone" type="text" required />
                            </label>
                        </div>
                        <div class="modal-row">
                            <label class="modal-field full-width">
                                Bio
                                <textarea v-model.trim="editForm.bio" rows="4"></textarea>
                            </label>
                        </div>
                        <footer class="modal-footer">
                            <button type="button" class="button secondary" @click="closeModal">Cancel</button>
                            <button type="submit" class="button primary">Save Changes</button>
                        </footer>
                    </form>
                </div>
            </div>
        </teleport>

        <!-- Company Information Modal -->
        <teleport to="body">
            <div v-if="isCompanyModalOpen" class="modal-backdrop" role="dialog" aria-modal="true"
                @click.self="closeModal">
                <div class="modal">
                    <header class="modal-header">
                        <h2>Edit Company Information</h2>
                        <button type="button" class="modal-close" @click="closeModal" aria-label="Close">×</button>
                    </header>
                    <form class="modal-body" @submit.prevent="saveCompany">
                        <div class="modal-row">
                            <label class="modal-field full-width">
                                Company Name
                                <input v-model.trim="editForm.companyName" type="text" required />
                            </label>
                        </div>
                        <div class="modal-row">
                            <label class="modal-field">
                                Country
                                <input v-model.trim="editForm.country" type="text" required />
                            </label>
                            <label class="modal-field">
                                City
                                <input v-model.trim="editForm.city" type="text" required />
                            </label>
                        </div>
                        <div class="modal-row">
                            <label class="modal-field">
                                Postal Code
                                <input v-model.trim="editForm.postalCode" type="text" required />
                            </label>
                            <label class="modal-field">
                                Street & Street Number
                                <input v-model.trim="editForm.address" type="text" required />
                            </label>
                        </div>
                        <div class="modal-row">
                            <label class="modal-field full-width">
                                VAT Number
                                <input v-model.trim="editForm.vatNumber" type="text" required />
                            </label>
                        </div>
                        <footer class="modal-footer">
                            <button type="button" class="button secondary" @click="closeModal">Cancel</button>
                            <button type="submit" class="button primary">Save Changes</button>
                        </footer>
                    </form>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>
export default {
    name: 'DetailView',
    data() {
        return {
            user: null,
            isPersonalModalOpen: false,
            isCompanyModalOpen: false,
            editForm: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                bio: '',
                companyName: '',
                country: '',
                city: '',
                postalCode: '',
                address: '',
                vatNumber: ''
            }
        };
    },
    async mounted() {
        await this.fetchUser();
    },
    methods: {
        async fetchUser() {
            try {
                const userId = this.$route.params.id;
                const response = await fetch(`/api/users/${userId}`);
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }
                this.user = await response.json();
            } catch (error) {
                console.error('Failed to load user', error);
            }
        },
        openPersonalModal() {
            this.editForm = {
                ...this.editForm,
                firstName: this.user.firstName || '',
                lastName: this.user.lastName || '',
                email: this.user.email || '',
                phone: this.user.phone || '',
                bio: this.user.bio || ''
            };
            this.isPersonalModalOpen = true;
        },
        openCompanyModal() {
            this.editForm = {
                ...this.editForm,
                companyName: this.user.companyName || '',
                country: this.user.country || '',
                city: this.user.city || '',
                postalCode: this.user.postalCode || '',
                address: this.user.address || '',
                vatNumber: this.user.vatNumber || ''
            };
            this.isCompanyModalOpen = true;
        },
        closeModal() {
            this.isPersonalModalOpen = false;
            this.isCompanyModalOpen = false;
        },
        async savePersonal() {
            try {
                const userId = this.$route.params.id;
                const updatedUser = {
                    ...this.user,
                    firstName: this.editForm.firstName,
                    lastName: this.editForm.lastName,
                    email: this.editForm.email,
                    phone: this.editForm.phone,
                    bio: this.editForm.bio
                };

                const response = await fetch(`/api/users/${userId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedUser)
                });

                if (!response.ok) {
                    throw new Error(`Update failed with status ${response.status}`);
                }

                this.user = await response.json();
                this.closeModal();
            } catch (error) {
                console.error('Failed to update user', error);
                alert(`Failed to update user: ${error.message}`);
            }
        },
        async saveCompany() {
            try {
                const userId = this.$route.params.id;
                const updatedUser = {
                    ...this.user,
                    companyName: this.editForm.companyName,
                    country: this.editForm.country,
                    city: this.editForm.city,
                    postalCode: this.editForm.postalCode,
                    address: this.editForm.address,
                    vatNumber: this.editForm.vatNumber
                };

                const response = await fetch(`/api/users/${userId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedUser)
                });

                if (!response.ok) {
                    throw new Error(`Update failed with status ${response.status}`);
                }

                this.user = await response.json();
                this.closeModal();
            } catch (error) {
                console.error('Failed to update user', error);
                alert(`Failed to update user: ${error.message}`);
            }
        },
        typeClass(type) {
            if (!type) {
                return '';
            }
            const normalized = String(type).trim().toLowerCase();
            if (normalized === 'service') {
                return 'service';
            }
            if (normalized === 'connect') {
                return 'connect';
            }
            return '';
        },
        statusClasses(status) {
            const classes = [];
            if (this.isDeactivated(status)) {
                classes.push('status-deactivated');
            }
            if (this.isInActive(status)) {
                classes.push('status-inactive');
            }
            return classes;
        },
        isDeactivated(status) {
            if (!status) {
                return false;
            }
            return String(status).trim() === 'deactivated';
        },
        isInActive(status) {
            if (!status) {
                return false;
            }
            return String(status).trim().toLowerCase() === 'inactive';
        },
        formatStatus(status) {
            if (!status) {
                return '';
            }
            const value = String(status).trim();
            if (!value) {
                return '';
            }
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
        async deleteUser() {
            if (!this.user) {
                return;
            }

            const confirmed = confirm(`Are you sure you want to delete ${this.user.firstName} ${this.user.lastName}?`);
            if (!confirmed) {
                return;
            }

            try {
                const userId = this.$route.params.id;
                const response = await fetch(`/api/users/${userId}`, {
                    method: 'DELETE'
                });

                if (!response.ok) {
                    throw new Error(`Delete failed with status ${response.status}`);
                }

                // Redirect back to archive page after successful deletion
                this.$router.push('/archive');
            } catch (error) {
                console.error('Failed to delete user', error);
                alert(`Failed to delete user: ${error.message}`);
            }
        }
    }
}
</script>

<style scoped></style>