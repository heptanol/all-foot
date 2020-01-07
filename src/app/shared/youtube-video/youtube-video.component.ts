import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";


@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YoutubeVideoComponent implements OnInit {

  @Input() query: string;
  videoUrl: SafeResourceUrl;
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.setVideoUrl();
  }

  setVideoUrl() {
    const dangerousVideoUrl = 'https://www.youtube.com/embed?listType=search&list=' + this.query;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
  }

}
