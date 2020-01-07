import {Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class HeaderService {

  constructor(
    private meta: Meta,
    private title: Title,
    private translate: TranslateService
  ) {}

  setTitle(): void {
    this.title.setTitle('Footpaper');
  }

  setMeta(): void {
    this.meta.addTags([
      { name: 'author',   content: 'Footpaper.info'},
      { name: 'keywords', content: 'Footpaper, Football, foot'},
    ]);
    this.translate.get('meta.description').subscribe((res: string) => {
      this.meta.addTag({name: 'description', content: res});
    });
  }

  setSubTitle(subtilte: string) {
    this.title.setTitle(subtilte + ' | Footpaper');
  }

  setShareTitle(title: string) {
    this.meta.updateTag(
      { property: 'og:title',   content: title},
      `property='og:title'`
    );
  }

  setShareDescription(description: string) {
    this.meta.updateTag(
      { property: 'og:description',   content: description},
      `property='og:description'`
    );
  }
}
