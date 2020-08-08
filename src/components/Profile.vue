<template>
  <div>
    <h2>Profile</h2>
    <img :src="pictureUrl" alt="profileImage" data-testid="pictureUrl" class="pictureUrl" />
    <p data-testid="name">Name: {{displayName}}</p>
    <button data-testid="logout" @click="logout">Log Out</button>
  </div>
</template>

<script>
import liff from '@line/liff';

export default {
  name: 'Profile',
  data() {
    return {
      displayName: '',
      pictureUrl: '',
    };
  },
  async created() {
    await liff.ready;
    if (!liff.isLoggedIn()) {
      liff.login();
    } else {
      const profile = await liff.getProfile();
      this.displayName = profile.displayName;
      this.pictureUrl = profile.pictureUrl;
    }
  },
  methods: {
    logout() {
      liff.logout();
      window.location.reload();
    },
  },
};
</script>

<style>
  .pictureUrl {
    width: 240px;
    height: 240px;
    border-radius: 50%;
  }
</style>
