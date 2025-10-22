<template>
    <div class="detail-view">
        <div class="detail-header d-flex justify-content-space-between align-items-center mb-32">
            <div class="d-flex align-items-center gap-16">
                <router-link to="/archive" class="back-button d-flex align-items-center gap-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <mask id="mask0" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                            <rect width="20" height="20" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M9.2115 10L13.0448 13.8333L12.1667 14.7114L7.45517 10L12.1667 5.28854L13.0448 6.16667L9.2115 10Z" fill="currentColor" />
                        </g>
                    </svg>
                    <span>Return to the previous page</span>
                </router-link>
            </div>
        </div>

        <div v-if="user" class="user-header d-flex justify-content-space-between align-items-center mb-32">
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
                <button class="delete-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M6.66667 17.5C6.20833 17.5 5.81597 17.3368 5.48958 17.0104C5.16319 16.684 5 16.2917 5 15.8333V5H4.16667V3.33333H8.33333V2.5H11.6667V3.33333H15.8333V5H15V15.8333C15 16.2917 14.8368 16.684 14.5104 17.0104C14.184 17.3368 13.7917 17.5 13.3333 17.5H6.66667ZM13.3333 5H6.66667V15.8333H13.3333V5ZM8.33333 14.1667H10V6.66667H8.33333V14.1667ZM11.6667 14.1667H13.3333V6.66667H11.6667V14.1667Z" fill="currentColor"/>
                    </svg>
                    Delete user
                </button>
            </div>
        </div>

        <div v-if="user" class="detail-content">
            <div class="info-card mb-24">
                <div class="card-header d-flex justify-content-space-between align-items-center">
                    <h2>Personal Information</h2>
                    <div>
                        <button class="edit-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4.16667 15.8333H5.29167L13.0208 8.10417L11.8958 6.97917L4.16667 14.7083V15.8333ZM2.5 17.5V13.9583L13.0208 3.45833C13.1806 3.31944 13.3542 3.21181 13.5417 3.13542C13.7292 3.05903 13.9236 3.02083 14.125 3.02083C14.3264 3.02083 14.5243 3.05903 14.7188 3.13542C14.9132 3.21181 15.0833 3.32639 15.2292 3.47917L16.5417 4.8125C16.6944 4.95833 16.8056 5.12847 16.875 5.32292C16.9444 5.51736 16.9792 5.71181 16.9792 5.90625C16.9792 6.10764 16.9444 6.30208 16.875 6.48958C16.8056 6.67708 16.6944 6.85069 16.5417 7.01042L6.04167 17.5H2.5ZM12.4479 7.55208L11.8958 6.97917L13.0208 8.10417L12.4479 7.55208Z" fill="currentColor"/>
                            </svg>
                            Edit
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="info-grid">
                        <div class="info-item">
                            <label>First name</label>
                            <p>{{ user.firstName }}</p>
                        </div>
                        <div class="info-item">
                            <label>Last Name</label>
                            <p>{{ user.lastName }}</p>
                        </div>
                        <div class="info-item">
                            <label>E-mail</label>
                            <p>{{ user.email }}</p>
                        </div>
                        <div class="info-item">
                            <label>Phone</label>
                            <p>{{ user.phone }}</p>
                        </div>
                        <div class="info-item full-width">
                            <label>Bio</label>
                            <p>{{ user.bio || 'No bio available' }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="info-card">
                <div class="card-header d-flex justify-content-space-between align-items-center">
                    <h2>Company</h2>
                    <button class="edit-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4.16667 15.8333H5.29167L13.0208 8.10417L11.8958 6.97917L4.16667 14.7083V15.8333ZM2.5 17.5V13.9583L13.0208 3.45833C13.1806 3.31944 13.3542 3.21181 13.5417 3.13542C13.7292 3.05903 13.9236 3.02083 14.125 3.02083C14.3264 3.02083 14.5243 3.05903 14.7188 3.13542C14.9132 3.21181 15.0833 3.32639 15.2292 3.47917L16.5417 4.8125C16.6944 4.95833 16.8056 5.12847 16.875 5.32292C16.9444 5.51736 16.9792 5.71181 16.9792 5.90625C16.9792 6.10764 16.9444 6.30208 16.875 6.48958C16.8056 6.67708 16.6944 6.85069 16.5417 7.01042L6.04167 17.5H2.5ZM12.4479 7.55208L11.8958 6.97917L13.0208 8.10417L12.4479 7.55208Z" fill="currentColor"/>
                        </svg>
                        Edit
                    </button>
                </div>
                <div class="card-body">
                    <div class="info-grid">
                        <div class="info-item full-width">
                            <label>Name</label>
                            <p>{{ user.companyName }}</p>
                        </div>
                        <div class="info-item">
                            <label>Country</label>
                            <p>{{ user.country }}</p>
                        </div>
                        <div class="info-item">
                            <label>City</label>
                            <p>{{ user.city }}</p>
                        </div>
                        <div class="info-item">
                            <label>Postal code</label>
                            <p>{{ user.postalCode }}</p>
                        </div>
                        <div class="info-item">
                            <label>Street & street number</label>
                            <p>{{ user.address }}</p>
                        </div>
                        <div class="info-item full-width">
                            <label>VAT</label>
                            <p>{{ user.vatNumber }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="loading">
            Loading user details...
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailView',
    data() {
        return {
            user: null
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
        }
    }
}
</script>

<style scoped>
.detail-view {
    max-width: 1200px;
    margin: 0 auto;
    padding: 32px;
}

.back-button {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: var(--light-color);
    font-size: var(--font-size-md);
    font-weight: 500;
    transition: opacity 0.2s ease;
}

.back-button:hover {
    opacity: 0.8;
}

.back-button svg {
    width: 20px;
    height: 20px;
}

.user-header {
    margin-bottom: 32px;
}

.user-name {
    font-size: var(--font-size-3xl);
    font-weight: 700;
    margin: 0;
    color: var(--light-color);
}

.delete-button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    background: var(--danger-light-color);
    color: var(--light-color);
    border: none;
    border-radius: 8px;
    font-size: var(--font-size-md);
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s ease;
}

.delete-button:hover {
    opacity: 0.9;
}

.info-card {
    background: var(--light-color);
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 24px;
}

.card-header {
    padding: 20px 24px;
    border-bottom: 1px solid var(--lines-light);
}

.card-header h2 {
    margin: 0;
    font-size: var(--font-size-xl);
    font-weight: 600;
    color: var(--default-color);
}

.edit-button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: var(--vibrant-light-color);
    color: var(--light-color);
    border: none;
    border-radius: 6px;
    font-size: var(--font-size-sm);
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s ease;
}

.edit-button:hover {
    background: var(--vibrant-dark-color);
}

.card-body {
    padding: 24px;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}

.info-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.info-item.full-width {
    grid-column: 1 / -1;
}

.info-item label {
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--lesser-color);
    margin: 0;
}

.info-item p {
    font-size: var(--font-size-md);
    font-weight: 500;
    color: var(--default-color);
    margin: 0;
}

.loading {
    text-align: center;
    padding: 48px;
    font-size: var(--font-size-lg);
    color: var(--light-color);
}

.mb-24 {
    margin-bottom: 24px;
}

.mb-32 {
    margin-bottom: 32px;
}

.gap-8 {
    gap: 8px;
}

.gap-16 {
    gap: 16px;
}

@media (max-width: 768px) {
    .info-grid {
        grid-template-columns: 1fr;
    }
    
    .info-item.full-width {
        grid-column: 1;
    }
}
</style>