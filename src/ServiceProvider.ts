import type { App } from 'vue';

export class ServiceProvider {
  locales() {
    return {};
  }

  routers() {
    return [];
  }

  boot(app: App) {
    // custom
  }
}
